import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        // Add more input fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onDrop = (acceptedFiles, inputName) => {
        const files = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setSelectedImages((prevImages) => [
            ...prevImages,
            {
                inputName,
                files,
            },
        ]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true,
    });

    return (
        <div className="image-uploader">
            {selectedImages.map(({ inputName, files }) => (
                <div key={inputName}>
                    <div className="dropzone">
                        <p>{inputName}</p>
                        <div {...getRootProps()} className={`dropzone-content ${isDragActive ? 'drag-active' : ''}`}>
                            <input {...getInputProps()} />
                            {files.map((file) => (
                                <img key={file.preview} src={file.preview} alt="Preview" className="preview-image" />
                            ))}
                            <p>Drag and drop images here, or click to select files</p>
                        </div>
                    </div>
                </div>
            ))}
            <input
                type="file"
                name="input1"
                value={inputValues.input1}
                onChange={handleInputChange}
                placeholder="Input 1"
            />
            <input
                type="file"
                name="input2"
                value={inputValues.input2}
                onChange={handleInputChange}
                placeholder="Input 2"
            />
            {/* Add more input fields as needed */}
        </div>
    );
};

export default ImageUploader;
