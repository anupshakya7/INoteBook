import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [
        {
            "_id": "65ed747cb7143a34a47cf156",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        },
        {
            "_id": "65ed747cb7143a34a47cf157",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        },
        {
            "_id": "65ed747cb7143a34a47cf158",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        }, {
            "_id": "65ed747cb7143a34a47cf159",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = async(title, description, tag) => {
        //Todo API Call
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZDcyYzNjNzRkY2VhMmJlOTZiZDhiIn0sImlhdCI6MTcxMDA2MDQyMn0.jPxdvkcVB5a32Te4b0qvTLm4KCifkbxz7Uqz8Snfl2Q'
            },
            body:JSON.stringify({title,description,tag})
        });

        console.log("Adding a New Note");
        const note = {
            "_id": "65ed747cb7143a34a47cf153",
            "user": "65ed72c3c74dcea2be96bd8bte",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    //Delete a Note
    const deleteNote = (id) => {
        //Todo API Call
        console.log("Deleting the note with id " + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        console.log(newNotes);
        setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZDcyYzNjNzRkY2VhMmJlOTZiZDhiIn0sImlhdCI6MTcxMDA2MDQyMn0.jPxdvkcVB5a32Te4b0qvTLm4KCifkbxz7Uqz8Snfl2Q'
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;