import React, { useState , useEffect} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() =>  {
    Axios.get("http://localhost:3001/api/getAll").then(res => setNotes(res.data))
}, [])

  return (
    <div >
        <Header />
        <CreateArea  notes={notes} setNotes = {setNotes} />
        <Note notes={notes} setNotes = {setNotes} />
    </div>
);
}

export default App;
