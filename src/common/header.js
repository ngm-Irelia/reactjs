import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';


//无状态组件性能更好

class Header extends Component {

    render() {
        return (
            <HeaderWrapper className="aaaa">
                <Logo> </Logo>
                <Nav>
                    <NavItem className="left active">简书</NavItem>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe6e4;</span></NavItem>
                    <NavSearch
                        className={ this.props.focused ? 'focused' : ''}
                        onFocus = { this.props.handleFocused }
                        onBlur = { this.props.handleBlur }
                    ></NavSearch>
                </Nav>
            </HeaderWrapper>
        )
    }
}

//把store中的数据，映射到props
const mapStateToProps = (state) => {
    console.log(state)
    return {
        focused:state.header.focused //因为使用combineReducers，路径发生变化，需要加上.header
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleFocused(){
            const action = {
                type: 'search_focus'
            };
            dispatch(action);  //其实就是store.dispatch()
        },
        handleBlur(){
            const action = {
                type: 'search_blur'
            };
            dispatch(action); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);