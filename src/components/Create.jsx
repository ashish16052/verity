import React from "react";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Navigate } from "react-router-dom";

function Create(props) {
    const [note, setNote] = useState({});
    const [toHome, setToHome] = useState(false);
    const arr = [];

    if (toHome === true) {
        return <Navigate to="/" />
    }

    function createNote(event) {
        const { name, value } = event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
                reviews: []
            };
        });

    }

    return (
        <div className="create">
            <form className="create-note">
                <input name="title" value={note.title} placeholder="Blog title" onChange={createNote} />
                <input name="image" value={note.image} placeholder="Image URL" onChange={createNote} />
                <textarea name="content" value={note.content} placeholder="Write a blog..." onChange={createNote} />
                <Fab type="button" onClick={() => {
                    props.add(note);
                    setNote({ title: "", content: "", image: "" });
                    setToHome(true);
                }}><AddOutlinedIcon /></Fab>
            </form>
        </div>
    );
}

export default Create;
