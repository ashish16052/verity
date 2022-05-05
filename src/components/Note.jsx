import React from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Note(props) {
    return <div className="note">
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <div className="userinfo">
            <AccountCircleIcon fontSize="large" className="userpfp" />
            <span>John Doe</span>
            <span className="date">05 May 2022</span>
        </div>
        {
            props.editable ?
                <button type="button" onClick={() => {
                    props.remove(props.id);
                }}>
                    <DeleteRoundedIcon />
                </button> :
                null
        }
    </div>;
}

export default Note;