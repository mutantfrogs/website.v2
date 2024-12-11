import { useEffect } from 'react';
import CreateNotes from '../components/notes/CreateNotes.jsx';

export default function CreateNotesPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
        <CreateNotes></CreateNotes>
    </div>
    )
}