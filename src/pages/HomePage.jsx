import { useEffect } from 'react';

export default function HomePage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='flexContainerColumn'>
    </div>
    )
}