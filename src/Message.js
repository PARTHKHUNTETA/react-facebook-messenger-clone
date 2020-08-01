import React, { forwardRef } from 'react'
import moment from 'moment';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    let newDate = null;
    if (!isUser) {
        newDate = moment(new Date(message.timeStamp.seconds * 1000)).format('DD/MM/YYYY hh:MM');
    }

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <h5 className="message__input">{!isUser && `${newDate || 'Unknown '}`}</h5>
            <h5 className="message__input"> {!isUser && `${message.username || 'Unknown User'}`}</h5>
            <Card className={isUser ? "message__useCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="inherit"
                        variant="h5"
                        component="h2">
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
