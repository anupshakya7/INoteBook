import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
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
            "_id": "65ed747cb7143a34a47cf156",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        },
        {
            "_id": "65ed747cb7143a34a47cf156",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        },{
            "_id": "65ed747cb7143a34a47cf156",
            "user": "65ed72c3c74dcea2be96bd8b",
            "title": "New Note 2",
            "description": "Please Access the Playlist 2",
            "tag": "Youtube 2",
            "date": "2024-03-10T08:51:08.260Z",
            "__v": 0
        }
    ]
    const [notes,setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;