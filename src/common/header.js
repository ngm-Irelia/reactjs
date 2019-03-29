import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';

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
                    <NavSearch></NavSearch>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;