import React from "react";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import "./Dropzone.css"
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Dropzone = ({props}, ref) => {

    useImperativeHandle(ref, () => ({
        uploadFile() {
            handlePost();
            props(fileUrl);
        }
    }), [])

    const [selectedFiles, setSelectedFiles] = useState([]);

    const removeFile = () => {
        selectedFiles.splice(0, 1);
        setSelectedFiles([...selectedFiles]);
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                alert('File type not permitted');
            }
        }
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length === 1 && selectedFiles.length === 0) {
            handleFiles(files);
        } else {
            alert("Can only upload 1 file. Remove the previous file to add another one.");
        }
    }

    const fileInputRef = useRef();

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (selectedFiles.length === 0) {
            handleFiles(fileInputRef.current.files);
        } else {
            alert("Can only upload 1 file. Remove the previous file to add another one.");
        }
    }

    const [fileUrl, setFileUrl] = useState("");

    const handlePost = () => {
        var d = new FormData();
        
        d.append('upload_preset', 'default-preset');
        d.append('file', selectedFiles[0]);
        d.append('cloud_name', 'dmieyzfqg');
        fetch(`https://api.cloudinary.com/v1_1/dmieyzfqg/image/upload`,{
            method: "POST",
            body: d
        })
        .then(response => response.json())
        .then(data => {
            setFileUrl(data.url);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className="container">
                <div 
                    className="drop-container"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave = {dragLeave}
                    onDrop = {fileDrop}
                    onClick = {fileInputClicked}
                >
                    <div className="drop-message">
                        <AddPhotoAlternateIcon className="upload-icon" />
                        <h4>Drag & Drop an image or click to upload</h4>
                    </div>
                    <input
                        ref={fileInputRef}
                        className="file-input"
                        type="file"
                        onChange={filesSelected}
                    />
                </div>
                <div className="file-display-container">
                    {
                        selectedFiles.map((data, i) =>
                            <div className="file-status-bar" key={i}>
                                <div>
                                    <AddPhotoAlternateIcon className="file-type-logo"/>
                                    <div className="file-type">{fileType(data.name)}</div>
                                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                    
                                </div>
                                <div className="file-remove" onClick={() => removeFile()}>X</div>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default forwardRef(Dropzone);