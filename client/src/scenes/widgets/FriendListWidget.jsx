import React, {useState, useEffect} from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Friend from '../../components/Friend';
import { setFriends } from '../../state';
import FlexBetween from '../../components/flexBetween';


export const FriendListWidget = () => {

    const dispatch = useDispatch();
    const {palette} = useTheme();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const getFriends = async () => {
        const response = await fetch(
            `http://localhost:3002/users/${userId}/friends`,
            {method: "GET",
                header:{ Authorization: `Bearer ${token}`}
            }
        );
        const data = await response.json();
        dispatch(setFriends({friends: data}))
    };
    useEffect(() => {
        getFriends();
            },[]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>FriendListWidget</div>
  )
}
