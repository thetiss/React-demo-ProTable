import React, { useState } from "react";
import { TreeSelect } from "antd";

export default function TreeSelector() {
  const TreeNode = useTreeNode();
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-1",
        },
        {
          title: "Child Node2",
          value: "0-0-2",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
    },
  ];
  return (
    <TreeSelect
      {...TreeNode}
      showSearch
      placeholder="请选择父角色名"
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
    />
  );
}
function useTreeNode() {
  const [value, setValue] = useState(undefined);
  function handleValueChange(selectedNodeValue) {
    setValue(selectedNodeValue);
  }
  return {
    value,
    onChange: handleValueChange,
  };
}
