import { useEffect } from 'react';

export default function BlogPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
        <h1 className='urgentHeader'>UNDER CONSTRUCTION!</h1>
    </div>
    )
}