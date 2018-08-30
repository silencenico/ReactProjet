import React, { Component } from 'react';
import { Table, Icon } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <span className="ant-divider" />
        <a href="#">Delete</a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John',
    age: 31,
    address: 'New York No. 1 Lake Park',
    }, {
    key: '2',
    name: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    }, {
    key: '3',
    name: 'Brown',
    age: 53,
    address: 'London No. 1 Lake Park',
    }, {
    key: '4',
    name: 'Green',
    age: 24,
    address: 'London No. 1 Lake Park',
    }, {
    key: '5',
    name: 'Black',
    age: 13,
    address: 'London No. 1 Lake Park',
    }, {
    key: '6',
    name: 'Joe',
    age: 87,
    address: 'Sidney No. 1 Lake Park',
    }];

export default class Detail extends Component {   
    render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
    }
}