import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function ViewNotes(){

    const [noteEntries, setNoteEntries] = useState([]);

    useEffect(() => {
        //axios.get("http://localhost:3001/getNotes")
        axios.get("https://mutantfro-gs-server.onrender.com/getNotes")
        .then(result => setNoteEntries(result.data))
        .catch(err => console.log(err))
    }, []);

    const renderNotes = () => {
        return noteEntries.map((note) => {
            return <div>
                <img style={{width: 125, backgroundColor: 'white'}} src={note.img}></img>
                <p>{note.comment}</p>
            </div>
        })
    };

    return(
        <div style={{marginTop: 10}} className='flexContainerRow'>
          {renderNotes()}
        </div>
    );
}