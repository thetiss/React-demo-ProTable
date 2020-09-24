## Overview 

## 介绍

本文旨在熟练使用ProTable，方法是：生产环境代码调试，若有必要扩展，在当前demo上去调试。

ProTable 默认封装了请求网络，翻页，搜索和筛选的逻辑。

## [快速入门](https://protable.ant.design/getting-started#%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE)

## 关键掌握

### 请求网络

request 

~~~jsx
const fetchData=()=>
	request
~~~



### 翻页

### 搜索

### 筛选



## ProTable 功能分区[#](https://2x.ant.design/docs/pattern/table-cn#内容)

<img src="C:\Users\chenh\Desktop\react\0 img\notes\zFqqEqKKAylKkxv.png" alt="结构示例" style="zoom:67%;" />

结构示例

通常表格的组成元素以及相关元素会有，这几部分组成。

1. 按钮组
2. 搜索条件
3. 排序
4. 筛选
5. 状态点
6. 单行操作
7. 分页器／无限加载（可选）







<img src="C:\Users\chenh\Desktop\react\0 img\notes\image-20200912112719969.png" alt="image-20200912112719969" style="zoom:50%;" />

1. 绿色框内: 具体表格内容, 包含分页
2. 红色框内: 检索部分, 通过 column 的配置自动生成的
3. 黄色框内: 表格的工具栏, 通过配置 **toolBarRender** 定义其中的按钮
4. 蓝色框内: 对表格数据进行多选操作时显示的信息

## [ProTable](https://procomponents.ant.design/components/table#protable)

### `toolBarRender`

| toolBarRender | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right | `(action: UseFetchDataAction<RequestData<T>>) => React.ReactNode[]` |      |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ---- |
|               |                                                            |                                                              |      |

`Add and multiDelete`

~~~jsx
    toolBarRender={(_, { selectedRowKeys }) => [
      <Button key="3" type="primary">
        <PlusOutlined />
        新建
      </Button>,
      selectedRowKeys && selectedRowKeys.length && (
        <Button
          key="3"
          onClick={() => {
            window.alert(selectedRowKeys.join('-'));
          }}
        >
          批量删除
        </Button>
      ),
    ]}
~~~

`Add`

~~~jsx
toolBarRender={() => [
        <Button type="primary" icon={<PlusOutlined />}>
          新建
        </Button>,
      ]}
~~~



### `Columns`

| 参数         | 说明                                                         | 类型                                                         | 默认值 | 版本    |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----- | :------ |
| key          | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string                                                       | -      |         |
| hideInSearch | 在查询表单中不展示此项                                       | boolean                                                      | -      |         |
| render       | 类似 table 的 render，第一个参数变成了 dom,增加了第四个参数 action | `(text: React.ReactNode,record: T,index: number,action: UseFetchDataAction<RequestData<T>>) => React.ReactNode \| React.ReactNode[]` | -      | AutDPro |
| render       | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格[行/列合并](https://ant.design/components/table-cn/#components-table-demo-colspan-rowspan) | function(text, record, index) {}                             |        | AutD    |
|              |                                                              |                                                              |        |         |
| valueType    | columns中值类型，若是时间型，在筛选时，会自动出现timeselector。valueType 还会影响查询表单的生成,不同的 valueType 对应不同的 antd 组件，对应关系如下表： | money 转化值为金额 eg. ¥10,000.26<br/>date 日期 eg. 2019-11-16<br/>dateTime 日期和时间 eg. 2019-11-16 12:50:00<br/>time 时间 eg. 12:50:00<br/>option 操作项，会自动增加 marginRight，只支持一个数组<br/>text 默认值，不做任何处理<br/>index 序号列<br/>indexBorder 带 border 的序号列 |        |         |
| filters      |                                                              |                                                              |        | false   |
| ValueEnum    | ValueEnum {   [key: string]:     \| React.ReactNode     \| {         text: React.ReactNode;         status: 'Success' \| 'Error' \| 'Processing' \| 'Warning' \| 'Default';       }; } |                                                              |        |         |
| hideInSearch | 在查询框中是否显示该数据项                                   |                                                              |        |         |
|              |                                                              |                                                              |        |         |
|              |                                                              |                                                              |        |         |



<img src="C:\Users\chenh\Desktop\react\0 img\learn from youtube\img\image-20200917131049185.png" alt="image-20200917131049185" style="zoom: 50%;" />

`valueType` 虽然解决了部分问题，但是枚举的情况他无法满足，所以 ProTable 还支持了 `valueEnum` 来支持枚举类型的数据。`valueEnum`是一个`Object`或者`Map`，如果你用数字当 key，或者对顺序有要求建议使用的`Map`。数据结构如下：

**配合为 valueEnum 的字段会被展示为下拉框。**

```tsx
const valueEnum = {
  open: '未解决',
  closed: {
    text: '已解决',
    status: 'Success',
  },
};

```

### `ActionRef`

在进行了操作，或者 tab 切换等时候我们需要手动触发一下表单的更新，纯粹的 props 很难解决这个问题，所以我们提供一个 ref 来支持一些默认的操作。

`eg. reload current page's ProTable in each 2s .`

```tsx
const ref = useRef<ActionType>();
// 两秒刷新一次表格
useEffect(() => {
  setInterval(() => {
    ref.current.reload();
  }, 2000);
}, []);
// hooks 绑定
<ProTable actionRef={ref} />;
```

### `dataSource`

~~~jsx
dataSource={data}
~~~

按照 [React 的规范](https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys)，所有的数组组件必须绑定 `key`。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

### `request`

获取 `dataSource` 的方法  

`(params?: {pageSize: number;current: number;[key: string]: any;},sort,filter) => Promise<RequestData<T>>`

### Search 搜索表单



### `rowSelection.type`

第一列是联动的选择框。可以通过 `rowSelection.type` 属性指定选择类型，默认为 `checkbox`。

<img src="C:\Users\chenh\Desktop\react\0 img\notes\image-20200911092252822.png" alt="image-20200911092252822" style="zoom:67%;" />



## [Table](https://ant.design/components/table-cn/)

columns

### filters

在列上实现筛选功能

`onFilter: (value, record) => record.name.indexOf(value) === 0,`

### sorter

在列上实现排序功能

​    `sorter: (a, b) => a.name.length - b.name.length,`

​    `sortDirections: ['descend'],`



### Table[#](https://ant.design/components/table-cn/#Table)

| 参数     | 说明                       | 类型                                                         | 默认值 | 版本 |
| :------- | :------------------------- | :----------------------------------------------------------- | :----- | :--- |
| onChange | 分页、排序、筛选变化时触发 | function(pagination, filters, sorter, extra: { currentDataSource: [], action: `paginate` | `sort` | `filter` }) |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数，可作数据主键 | string \| function(record): string | `key` |  |

## Form表单

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

### 何时使用[#](https://ant.design/components/form-cn/#何时使用)

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

| 参数           | 说明                                                         | 类型                                                         | 默认值 | 版本 |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ | ---- |
| form           | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | [FormInstance](https://ant.design/components/form-cn/#FormInstance) | -      |      |
| initialValues  | 表单默认值，只有初始化以及重置时生效                         | object                                                       | -      |      |
| onFinish       | 提交表单且数据验证成功后回调事件                             | function(values)                                             | -      |      |
| onFinishFailed | 提交表单且数据验证失败后回调事件                             | function({ values, errorFields, outOfDate })                 | -      |      |



## Form.Item[#](https://ant.design/components/form-cn/#Form.Item)

表单字段组件，用于数据双向绑定、校验、布局等。

| 参数  | 说明                                                         | 类型                                                        | 默认值 | 版本 |
| :---- | :----------------------------------------------------------- | :---------------------------------------------------------- | :----- | :--- |
| label | `label` 标签的文本                                           | string \| ReactNode                                         | -      |      |
| colon | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号       | boolean                                                     | true   |      |
| name  | 字段名，支持数组                                             | [NamePath](https://ant.design/components/form-cn/#NamePath) | -      |      |
| rules | 校验规则，设置字段的校验逻辑。点击[此处](https://ant.design/components/form-cn/#components-form-demo-basic)查看示例 | [Rule](https://ant.design/components/form-cn/#Rule)[]       | -      |      |
|       |                                                              |                                                             |        |      |



## Modal对话框

模态对话框。

API[#](https://ant.design/components/modal-cn/#API)

| 参数     | 说明                                 | 类型                | 默认值    |
| -------- | ------------------------------------ | ------------------- | --------- |
| okText   | 确认按钮文字                         | string \| ReactNode | `确定`    |
| okType   | 确认按钮类型                         | string              | `primary` |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e)         | -         |
| onOk     | 点击确定回调                         | function(e)         | -         |

### 何时使用[#](https://ant.design/components/modal-cn/#何时使用)

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 `Modal.confirm()` 等语法糖方法。

## Form in Modal

### 难点

1 form 、modal有各自的提交处理逻辑。

2 form获取的数据应该怎样提交

### 解决办法

1 用form提交数据逻辑

2 用modal提交数据逻辑

### deleting

form组织元素text input,ratio button等。用于组织好信息，不用实现提交。

modal有一个自带onOK、onCancel按钮，用她来实现提交。

http://localhost:8000/system-management/rolePermission

~~~jsx

~~~

## TreeSelect树选择 VS Tree

前者同时具备tree、select属性，后者只tree。没有select(下拉样式)。

但二者均可展开、收起、选择事件。

## TreeSelect树选择

树型选择控件。

### 何时使用[#](https://ant.design/components/tree-select-cn/#何时使用)

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

### API

| 参数                    | 说明                                                         | 类型                                                         | 默认值                  | 版本 |
| :---------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :---------------------- | :--- |
| treeDefaultExpandedKeys | 默认展开的树节点                                             | string[]                                                     | -                       |      |
| showCheckedStrategy     | 定义选中项回填的方式。`TreeSelect.SHOW_ALL`: 显示所有选中节点(包括父节点)。`TreeSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点 | `TreeSelect.SHOW_ALL` | `TreeSelect.SHOW_PARENT` | `TreeSelect.SHOW_CHILD` | `TreeSelect.SHOW_CHILD` |      |
| treeCheckable           | 显示 Checkbox                                                | boolean                                                      | false                   |      |
| allowClear              | 显示清除按钮                                                 | boolean                                                      | false                   |      |
| treeData                | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array<{value, title, children, [disabled, disableCheckbox, selectable, checkable]}> | []                      |      |
| loadData                | 异步加载数据                                                 | function(node)                                               |                         |      |
| onChange                | 选中树节点时调用此函数                                       | function(value, label, extra)                                | -                       |      |
| value                   | 指定当前选中的条目                                           | string \| string[]                                           | --                      |      |



### TreeNode props[#](https://ant.design/components/tree-select-cn/#TreeNode-props)

> 建议使用 treeData 来代替 TreeNode，免去手工构造麻烦

| 参数            | 说明                                               | 类型                | 默认值 | 版本 |
| :-------------- | :------------------------------------------------- | :------------------ | :----- | :--- |
| selectable      | 是否可选                                           | boolean             | true   |      |
| checkable       | 当树为 Checkbox 时，设置独立节点是否展示 Checkbox  | boolean             | -      |      |
| disableCheckbox | 禁掉 Checkbox                                      | boolean             | false  |      |
| disabled        | 是否禁用                                           | boolean             | false  |      |
| isLeaf          | 是否是叶子节点                                     | boolean             | false  |      |
| key             | 此项必须设置（其值在整个树范围内唯一）             | string              | -      |      |
| title           | 树节点显示的内容                                   | string \| ReactNode | `---`  |      |
| value           | 默认根据此属性值进行筛选（其值在整个树范围内唯一） |                     |        |      |



## Tree树形控件

多层次的结构列表。

### 何时使用[#](https://ant.design/components/tree-cn/#何时使用)

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 `树控件` 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

### API[#](https://ant.design/components/tree-cn/#API)

### Tree props[#](https://ant.design/components/tree-cn/#Tree-props)

![image-20200923111753747](C:\Users\chenh\Desktop\react\0 img\learn from youtube\img\image-20200923111753747.png)

element从左往右：expand、check、select

| 参数             | 说明                                                         | 类型                                                         | 默认值 |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----- |
| onExpand         | 展开/收起节点时触发                                          | function(expandedKeys, {expanded: bool, node})               | -      |
| onCheck          | 点击复选框触发                                               | function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys}) | -      |
| onSelect         | 点击树节点触发                                               | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | -      |
|                  |                                                              |                                                              |        |
| expandedKeys     | （受控）展开指定的树节点                                     | string[]                                                     | []     |
| checkedKeys      | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string[] \| {checked: string[], halfChecked: string[]}       | []     |
| selectedKeys     | （受控）设置选中的树节点                                     | string[]                                                     |        |
|                  |                                                              |                                                              |        |
| autoExpandParent | 是否自动展开父节点                                           | boolean                                                      | false  |
| checkable        | 当树为 checkable 时，设置独立节点是否展示 Checkbox           | boolean                                                      |        |

### TreeNode props[#](https://ant.design/components/tree-cn/#TreeNode-props)

| 参数            | 说明                                                         | 类型                              | 默认值                 |      |
| :-------------- | :----------------------------------------------------------- | :-------------------------------- | :--------------------- | ---- |
| checkable       | 当树为 checkable 时，设置独立节点是否展示 Checkbox           | boolean                           | -                      |      |
| disableCheckbox | 禁掉 checkbox                                                | boolean                           | false                  |      |
| disabled        | 禁掉响应                                                     | boolean                           | false                  |      |
| icon            | 自定义图标。可接收组件，props 为当前节点 props               | ReactNode \| (props) => ReactNode | -                      |      |
| isLeaf          | 设置为叶子节点(设置了`loadData`时有效)                       | boolean                           | false                  |      |
| key             | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string                            | (内部计算出的节点位置) |      |
| selectable      | 设置节点是否可被选中                                         | boolean                           | true                   |      |
| title           | 标题                                                         | string \| ReactNode               | `---`                  |      |

### DirectoryTree props[#](https://ant.design/components/tree-cn/#DirectoryTree-props)

# Production Code

## 系统管理-角色管理 

~~~TXT
├─role
│  │  index.jsx
│  │
│  └─components
│      ├─AddRoleModal
│      │      index.jsx
│      │      index.less
│      │
│      └─RoleMgtList
│              index.jsx
│
└─user
~~~

## refactor-系统管理-角色管理 

http://localhost:8000/system-management/role

http://localhost:8000/system-management/log/logout

~~~TXT
├─log
│  ├─login
│  │      index.jsx
│  │      service.js
│  │
│  ├─logout
│  │      index.jsx
│  │      service.js
│  │
│  └─option
│          index.jsx
│
├─role
│  │  index.jsx
│  │
│  └─components
│      ├─AddRoleModal
│      │      index.jsx
│      │      index.less
│      │
│      └─RoleMgtList
│              index.jsx




~~~

