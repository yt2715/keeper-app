import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Axios from "axios";

const Add = ({ setNotes }) => {
    const [expand , setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "" ,
        content:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setNote({
            ...note,
            [name]: value
        })
    }

    const add = () => {
        if(note.title) {
            Axios.post("http://localhost:5000/api/addNew" , note)
            .then(res => setNotes(res.data))
            setNote({
                title: "",
                content:""
            })
        }
    }

    function handleClick(){
          setExpand(true);
    }

    return (
            <div>
              <form className="create-note">
              {expand? <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                /> : null}

                <textarea
                  name="content"
                  onClick = {handleClick}
                  onChange={handleChange}
                  value={note.content}
                  placeholder="Take a note..."
                  rows= {expand? 3:1}
                />
                <Zoom in={expand}>
                    <Fab onClick = {add}>
                    <AddBoxIcon  />
                    </Fab>
                </Zoom>
              </form>
            </div>
          );
}

export default Add
