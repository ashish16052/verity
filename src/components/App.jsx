import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Create from "./Create";
import blogs from "./blog_data.js";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Blog from "./Blog.jsx";

function App() {

    const [notebook, setNoteBook] = useState([]);

    useEffect(() => {
        const localNotebook = JSON.parse(localStorage.getItem('local-notebook'));
        if (localNotebook) {
            setNoteBook(localNotebook);
            console.log(localNotebook);
        }
        else {
            setNoteBook(blogs);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('local-notebook', JSON.stringify(notebook));
        console.log(notebook);
    }, [notebook]);

    function addNote(note) {
        setNoteBook(prevNote => {
            return [...prevNote, note];
        });
    }

    function removeNote(id) {
        setNoteBook((prevNote) => {
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
    }

    function addReview(id, review) {
        let temp_notebook = [...notebook];
        let temp_element = temp_notebook[id];
        temp_element.reviews.push(review);
        temp_notebook[id] = temp_element;
        setNoteBook(temp_notebook);
    }

    return <div>
        <Link to="/"><Header /></Link>
        <Routes>
            <Route path="/" element={<div className="book">
                {notebook.map((notes, i) => (
                    <Link to={"/blog-" + i}>
                        <Note
                            key={i}
                            id={i}
                            title={notes.title}
                            content={notes.content}
                            editable={false}
                            remove={removeNote}
                            image={notes.image}
                        />
                    </Link>
                ))}
            </div>} />
            <Route path="write" element={<Create add={addNote} />} />
            <Route path="/update" element={<div className="book">
                {notebook.map((notes, i) => (
                    <Note
                        key={i}
                        id={i}
                        title={notes.title}
                        content={notes.content}
                        editable={true}
                        remove={removeNote}
                        image={notes.image}
                    />
                ))}
            </div>} />
            <Route path="blog-:id" element={<Blog note={notebook} addReview={addReview} />} />
        </Routes>
    </div>;
}

export default App;