import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createActionShowHidePhoneNumber} from "../../store/profile/actions";
import Checkbox from '@mui/material/Checkbox';

export const ProfilePage = () => {

    const {showPhoneNumber, phoneNumber} = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowPhoneNumber = () => {
        dispatch(createActionShowHidePhoneNumber())
    }

    return (
        <>
            <p>This is page 'Profile'</p>
            <Checkbox
                checked={showPhoneNumber}
                onChange={setShowPhoneNumber}
            />
            <span>Show phone number</span>
            {showPhoneNumber && <div>{phoneNumber}</div>}
        </>
    );
}
