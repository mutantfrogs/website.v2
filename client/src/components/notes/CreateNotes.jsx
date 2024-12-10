import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function CreateNotes() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);

    //canvas settings
    const [lineWeight, setLineWeight] = useState(7);

    //upload states
    const [comment, setComment] = useState();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const draw = (e) => {
            if (!isDrawing) return;

            const x = e.clientX - canvas.offsetLeft;
            const y = e.clientY - canvas.offsetTop;

            //brush
            context.beginPath();
            context.arc(x, y, lineWeight / 2, 0, Math.PI * 2);
            context.fill();
        };

        const handleMouseDown = (e) => {
            setIsDrawing(true);
            setLastX(e.clientX - canvas.offsetLeft);
            setLastY(e.clientY - canvas.offsetTop);
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
        };

        const handleMouseEnter = () => {
            document.body.style.cursor = "crosshair";
        }

        const handleMouseOut = () => {
            setIsDrawing(false);
            document.body.style.cursor = "default";
        }

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener("mouseout", handleMouseOut);
        canvas.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener("mouseout", handleMouseOut);
            canvas.removeEventListener("mousein", handleMouseEnter);
        };
    }, [isDrawing, lastX, lastY, lineWeight]);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    const uploadNote = () => {
        const canvas = canvasRef.current;
        const img = canvas.toDataURL();
        axios.post("http://localhost:3001/uploadNote", {img, comment})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        clearCanvas();
        alert("Note successfully uploaded!");
    }

    return (
        <div className='flexContainerColumn'>
            <canvas
                className="notesCanvas"
                ref={canvasRef}
                style={{ backgroundColor: 'white' }}
                height={250}
                width={250}
            ></canvas>

            <p style={{ marginBottom: 2 }}>comment:</p>
            <textarea onChange={(e) => setComment(e.target.value)}></textarea>

            <button onClick={clearCanvas}>clear</button>
            <button onClick={uploadNote}>upload</button>

        </div>
    );
}
