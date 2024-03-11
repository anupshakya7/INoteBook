import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote} = context;
    // eslint-disable-next-line
    return (
        <>
            <AddNote/>
            <div className="container my-3">
                <h3>Your Notes</h3>
                <div className="row">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />;
                })}
                </div>
            </div>
        </>
       
    )
}

export default Notes;


