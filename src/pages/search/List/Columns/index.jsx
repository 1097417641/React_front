import {Space} from 'antd'
import { Link } from "react-router-dom";
const columns = [
    {
      title: '档号',
      dataIndex: 'document_id',
      key: 'doucument_id',
    },
    {
      title: '年度',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: '案卷提名',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link  target="_blank" to={`/KG`}>{text}</Link>
    },
    {
        title: '起始日期',
        dataIndex: 'start_date',
        key: 'start_date',
      },
      {
        title: '结束日期',
        dataIndex: 'end_date',
        key: 'end_date',
      },
      {
        title: '归档日期',
        dataIndex: 'archive_date',
        key: 'archive_date',
      },
      {
        title: '件数',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '页数',
        dataIndex: 'pages',
        key: 'pages',
      },
    {
      title: '原件',
      key: 'action',
      render: (text, record) => (
        <Space  size="small">
          <a  href={record.url} >查看</a>
          <a  href={record.url} >下载</a>
          <a  href={record.url} >卷内目录</a>
        </Space>
      ),
    },
  ];

  export default columns