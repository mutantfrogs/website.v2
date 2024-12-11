import { useEffect } from 'react';
import ViewNotes from '../components/notes/ViewNotes.jsx';

export default function ViewNotesPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
        <ViewNotes></ViewNotes>
    </div>
    )
}