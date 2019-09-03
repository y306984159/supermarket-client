import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Login from './login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'

export default class BasicRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/register" componet={Register}></Route>
                    <Route path="/login" componet={Login}></Route>
                    <Route componet={Main}></Route>  {/* 默认组件 */}
                </Switch>   
            </HashRouter>
        )
    }
}
