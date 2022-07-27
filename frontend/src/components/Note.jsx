import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from "axios";

const Show = ({ notes, setNotes }) => {
    const deleteKeeper = (id)  => {
        Axios.post("http://localhost:5000/api/delete", { id })
        .then(res => setNotes(res.data))
    }

    return (
            <div>
            {
                notes.map( note => (
                    <div className="note " key={note._id}>
                        <h1>{note.title}</h1>
                        <p>{note.content} </p>
                        <button onClick={() => deleteKeeper(note._id)}> < DeleteIcon /></button>
                    </div>
                ))
            }
            </div>
    )
}

export default Show;
