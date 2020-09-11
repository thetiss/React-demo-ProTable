import React, { useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Tag, Space } from "antd";
import ProTable, {
  ProColumns,
  TableDropdown,
  ActionType,
} from "@ant-design/pro-table";
import request from "umi-request";
const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 4; i += 1) {
    data.push({
      key: i,
      date: "2014-12-24 23:12:00",
      firstname: "harry",
      surname: "porter",
    });
    return (
      <ProTable
        columns={[
          { title: "Date", dataIndex: "date", key: "date" },
          { title: "FirstName", dataIndex: "firstname", key: "firstname" },
          { title: "SurName", dataIndex: "surname", key: "surname" },
        ]}
        headerTitle={false}
        dataSource={data}
        search={false}
        options={false}
        pagination={false}
      />
    );
  }
};
export default function IssueTable(props) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "标题",
      dataIndex: "title",
    },
  ];

  const actionRef = useRef();
  return (
    <ProTable
      columns={columns}
      //rowSelection={{}}
      actionRef={actionRef}
      request={async (
        params = {} //请求数据
      ) =>
        request("https://proapi.azurewebsites.net/github/issues", {
          params,
        })
      }
      rowKey="id"
      dateFormatter="string"
      headerTitle="Pro Table"
      expandable={{ expandedRowRender }}
    />
  );
}
