import React from 'react';
import { useDropzone } from "react-dropzone"
import type { RouteComponentProps } from 'react-router-dom';

export const Drag: React.FC<RouteComponentProps> = () => {
    const [image, setImage] = React.useState<string[]>([]);
    const onDrop = React.useCallback(acceptedFiles => {
        const file = acceptedFiles;
        const i = file.map((f: any) => (Object.assign(f, {
            preview: URL.createObjectURL(f)
        })));
        setImage(i);
        console.log(i[0]);
    }, []);

    const thumbnail = image.map(file => (
        <div style={{ padding: "20px", objectFit: "cover"}} key={(file as any).name}>
            <img
            style={{
                width: "250px",
                height: "300px"
            }}
            src={(file as any).preview}
            />
        </div>
    ))
    

    const { getRootProps, getInputProps, isDragActive, fileRejections, acceptedFiles } = useDropzone({onDrop, accept: "image/jpeg, image/png", maxFiles: 1})
    const rejects = fileRejections.map(({file, errors}) => (
        <li key={(file as any).path}>
        {(file as any).path} - {file.size} bytes
        <ul>
          {errors.map(e => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    ))

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={(file as any).path}>
        {(file as any).path} - {file.size} bytes
        </li>
    ))

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ? <p>drag in an image or click to select</p> : <p>click to add image</p>
                }
                <h3>{rejects}</h3>
                <h3>{acceptedFileItems}</h3>
            </div>
            <div>
              {thumbnail}
            </div>
        </>
    )
}
