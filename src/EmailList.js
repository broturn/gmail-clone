import React from 'react';
import { Checkbox, IconButton } from "@material-ui/core";
import "./EmailList.css";
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings } from '@material-ui/icons';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingRight">
                <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                
            </div>
        </div>
    )
}

export default EmailList;
