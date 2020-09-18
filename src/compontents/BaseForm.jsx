import React, { useState } from "react";
import { Button, Form, Input } from "antd";

export default function BaseForm() {
  const name = useTextInput("Dan Abramov");
  const carrer = useTextInput("Facebook");
  const techStack = useTextInput("ReactJS");

  const onFinish = (values) => {
    console.log("Success submit" + values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Success submit" + errorInfo);
  };
  const handleSubmitForm = (values) => {
    alert(values);
  };

  return (
    <Form
      name="authorInfoCard"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
      <Form.Item>
        <Button htmlType="submit" onClick={handleSubmitForm}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleValueChange,
  };
}
