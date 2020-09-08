import React, { Component } from 'react'
import './UserCard.css'

import axios from 'axios';
import { Skeleton, Card, Avatar, Button } from 'antd';
import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
class UserCard extends Component {

    handleSettingsClick = () => {

    }

    render(){
        let { loading, userData : {
            avatar_url, bio, Name, repos_url
        } } = this.props;
        return  <>
                <Card
                style={{ width: 500, marginTop: 25 }}
                actions={[
                    <Button 
                    type="primary" 
                    icon={<SettingOutlined key="setting" />}
                    onClick={() => this.handleSettingsClick()}/>,
                    <Button 
                    type="primary" 
                    icon={<EllipsisOutlined key="ellipsis" />}
                    onClick={() => this.props.handleEllipsisClick(repos_url)}/>
                ]}
                >
                <Skeleton loading={loading} avatar active>
                    <Meta
                    avatar={
                        <Avatar src={avatar_url || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                    }
                    title={Name || "Super User"}
                    description={bio || "Search for any user to see his/her informations"}
                    />
                </Skeleton>
            </Card>
                </>
    }
}

export default UserCard;