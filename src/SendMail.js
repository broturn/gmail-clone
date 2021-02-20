import React from 'react';
import "./SendMail.css";
import { Close } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" />
            </div>

            <form>
                <input placeholder= 'To' type="text" />
                <input placeholder="Subject"  type="text" />
                <input placeholder="Message..."  type="text" className="sendMail__message"/>

                <div className="sendMail__options">
                    <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
