import { useEffect } from 'react';
import NotesWindow from '../components/notes/NotesWindow.jsx';
import UnderConstruction from "../components/UnderConstruction.jsx"

export default function NotePage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
        <NotesWindow></NotesWindow>
    </div>
    )
}