import React, { Component } from 'react'
import './ListComponent.css'

import { List, Avatar, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export default class ListComponent extends Component {
    render() {
        let { data } = this.props
        return (
            <div className="demo-infinite-container">
                <List
                    dataSource={data}
                    renderItem={item => (
                    <List.Item key={item.id}>
                    <List.Item.Meta
                    avatar={
                    <Avatar src={item.owner.avatar_url} />
                    }
                    title={<a href={item.html_url}>{item.name.last}</a>}
                    description={item.description}
                    />
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        onClick={() => {}}
                    >
                    See Issues!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        onClick={() => {}}
                    >
                    See Pull Requests!
                    </Button>
                    </List.Item>
                    )}
                >
                </List>
            </div>
        )
    }
}
