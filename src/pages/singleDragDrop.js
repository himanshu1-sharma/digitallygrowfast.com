import React, { useState, useEffect } from "react";
import { useDropzone } from 'react-dropzone';

export default function SingleDragDrop() {

    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setSelectedImage(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false,
    });

    return (
        <>
            <div className="image-uploader">
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'drag-active' : ''}`}>
                    <input {...getInputProps()} />
                    {selectedImage ? (
                        <img src={selectedImage} alt="Preview" className="preview-image" />
                    ) : (
                        <p>Drag and drop an image here, or click to select a file</p>
                    )}
                </div>
            </div>
        </>
    )
};
