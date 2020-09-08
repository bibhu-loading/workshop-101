import React, { Component } from 'react'
import './InputComponent.css'

import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';

import UserCard from '../UserCard';
import ListComponent from '../ListComponent';

const { Search } = Input;

export default class InputComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData : {},
            userDataError : {},
            loading : false,
            reposData : [],
            reposLoading : false,
            reposDataError : {}
        }
    }

    handleOnSearch = (value) => {
        this.setState({loading: true})
        //Jyotiman
        const inputArg = value;
        const baseURL = "https://api.github.com/users/"
        axios.get(baseURL + inputArg)
        .then((response) => {this.setState({userData : response.data, loading: false})})
        .catch((error) => {this.setState({ userDataError : { status: 404, message: "No data found"}})})
    }

    handleEllipsisClick = (repos_url) => {
        this.setState({reposLoading: true})
        axios.get(repos_url)
        .then((response) => {this.setState({reposData : response.data, reposLoading: false})})
        .catch((error) => {this.setState({ reposDataError : { status: 404, message: "No data found"}})})
    }

    render() {
        return (
            <>
            <div className="github-issues-search">
            <span>
                <Search
                    placeholder="Search for any user"
                    enterButton="Search"
                    size="medium"
                    onSearch={this.handleOnSearch}
                />
            </span>
            <UserCard {...this.state} handleEllipsisClick={this.handleEllipsisClick}/>
            <ListComponent data={this.state.reposData} loading={this.state.reposLoading}/>
            </div>
            </>
        )
    }
}

