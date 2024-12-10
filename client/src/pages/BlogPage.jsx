import { useEffect } from 'react';
import UnderConstruction from '../components/UnderConstruction.jsx';

export default function BlogPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
        <UnderConstruction></UnderConstruction>
    </div>
    )
}