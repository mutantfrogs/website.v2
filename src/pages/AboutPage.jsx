import { useEffect } from 'react';

export default function AboutPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='flexContainerColumn'>
       
    </div>
    )
}