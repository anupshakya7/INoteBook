import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} =context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <span onClick={()=>{deleteNote(note._id)}}><i style={{cursor:"pointer"}} className='fas fa-trash mx-2'></i></span>
                        <a ><i style={{cursor:"pointer"}} className='fas fa-edit mx-2'></i></a> 
                    </div>
                    <p className="card-text">{note.description}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default NoteItem
