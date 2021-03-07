import React from "react";
import {UserType} from './HW3';

type propsType = {
    users: UserType[];
}

function AlternativeGreeting(props: propsType) {
    const usersElement = props.users.map(u => <div>User name: {u.name} </div>)
    return (
        <div>
            {usersElement}
        </div>
    );
}

export default AlternativeGreeting;
