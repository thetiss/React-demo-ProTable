import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import useSWR from "swr";
import axios from "axios";

export default function BaseForm() {
  // const { data, error } = useSWR(
  //   "https://ghibliapi.herokuapp.com/films",
  //   fetch
  // );
  // if (error) console.log("failed to fetch api data");
  // // if (!data) console.log("no data");
  // // console.log(data.id);
  // console.log(data);

  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("SubFormInModal onCreate values", values);
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
    //alert("youve clicked cancel btn");
  };
  const handleOnClick = () => {
    setVisible(true);
  };

  const FormInModal = useBaseForm({ visible, onCancel, onCreate });
  return (
    <div>
      <Button type="primary" onClick={handleOnClick}>
        New a user
      </Button>
      {FormInModal}
    </div>
  );
}

function useBaseForm({ visible, onCancel, onCreate }) {
  const name = useTextInput("Dan Abramov");
  const carrer = useTextInput("Facebook");
  const techStack = useTextInput("ReactJS");

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="New A User"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((value) => {
            form.resetFields();
            onCreate(value);
          })
          .catch((info) => {
            console.log("onOK failed", info);
          });
      }}
    >
      <Form name="authorInfoCard" form={form}>
        <Form.Item
          label="Name"
          name="userName"
          rules={[{ required: true, message: "Display author name" }]}
        >
          <Input.TextArea {...name} />
        </Form.Item>
        <Form.Item
          label="Server Company"
          name="career"
          rules={[{ required: true, message: "Work in" }]}
        >
          <Input.TextArea {...carrer} />
        </Form.Item>
        <Form.Item
          label="Technique Stack"
          name="techStack"
          rules={[{ required: true, message: "Equiped with Skills" }]}
        >
          <Input.TextArea {...techStack} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [film, setFilm] = useState();
  useEffect(async () => {
    const result = await axios("https://ghibliapi.herokuapp.com/films");
    //const result = await axios("http://127.0.0.1:8008/api/get");

    console.log(result.data);
    setFilm(result);
  }, []);
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleValueChange,
  };
}
