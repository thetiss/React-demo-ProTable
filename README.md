## [ProTable](https://procomponents.ant.design/components/table#protable)

### `Columns`

| 参数         | 说明                                                         | 类型    | 默认值 | 版本 |
| :----------- | :----------------------------------------------------------- | :------ | :----- | :--- |
| key          | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string  | -      |      |
| hideInSearch | 在查询表单中不展示此项                                       | boolean | -      |      |
|              |                                                              |         | -      |      |
|              |                                                              |         |        |      |
|              |                                                              |         |        |      |
|              |                                                              |         |        |      |

### `dataSource`

~~~jsx
dataSource={data}
~~~

按照 [React 的规范](https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys)，所有的数组组件必须绑定 `key`。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

### `request`

获取 `dataSource` 的方法  

`(params?: {pageSize: number;current: number;[key: string]: any;},sort,filter) => Promise<RequestData<T>>`

### `rowSelection.type`

第一列是联动的选择框。可以通过 `rowSelection.type` 属性指定选择类型，默认为 `checkbox`。

<img src="C:\Users\chenh\Desktop\react\0 img\notes\image-20200911092252822.png" alt="image-20200911092252822" style="zoom:67%;" />



## [Table](https://ant.design/components/table-cn/)

