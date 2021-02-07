import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Apps, ArrowDropDown, Notifications } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <IconButton>
            <MenuIcon />
            </IconButton>
            <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
            </div>
.            <div className="header__middle">
<SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header__inputCaret" />
            </div>
            <div className="header__right">
               <IconButton>
               <Apps />
                </IconButton>
                <IconButton>
               <Notifications />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
