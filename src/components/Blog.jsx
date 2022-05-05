import React from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Blog = (props) => {

    const id = useParams().id;

    const [review, setReview] = useState("");

    function addReview(event) {
        const newReview = event.target.value;
        setReview(newReview);
    }

    return (
        < div className='blogpage' >
            <div className='blogcol'>
                <h1>{props.note[id] && props.note[id].title}</h1>
                <img src={props.note[id] && props.note[id].image}></img>
                <p>{props.note[id] && props.note[id].content}</p>
            </div>
            <div className='reviewcol'>
                <h2>Reviews</h2>
                {props.note[id] && props.note[id].reviews.map((review) =>
                    <div className='comment'>
                        <div className='userinfo'><AccountCircleIcon /> <p>John Doe</p></div>
                        <p>{review}</p>
                    </div>)}
                <form className="add-review">
                    <input name="review" value={review} placeholder="Add Comment" onChange={addReview} />
                    <div className='submit' onClick={() => {
                        props.addReview(id, review);
                        setReview("");
                    }}>+</div>
                </form>
            </div>
        </div >
    )
}

export default Blog