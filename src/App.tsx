// ./src/App.tsx

import "./App.css";
import React, { useState } from 'react';
import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';
import { Dropzone, FileItem } from "@dropzone-ui/react";

// import React from "react";
import { PageLayout } from "./components/PageLayout";
// Addition
import 'bootstrap/dist/css/bootstrap.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
// End addition




function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
    });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {graphData ?
        <ProfileData graphData={graphData} />
        :
        <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
      }
    </>
  );
};

// Previous storage code
const storageConfigured = isStorageConfigured();




const App = (): JSX.Element => {
  // all blobs in container
  const [blobList, setBlobList] = useState<string[]>([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState<any[]>([]);

  const { instance, accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (incommingFiles: any) => {
    // capture file into state
    console.log(incommingFiles[0])
    setFileSelected(incommingFiles);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    console.log("uploading...")
    console.log(fileSelected[0].file)
    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer: string[] = await uploadFileToBlob(fileSelected[0].file);

    // prepare UI for results
    setBlobList(blobsInContainer);
    console.log("blobsInContainer")
    console.log(blobsInContainer)

    // reset state/form
    setFileSelected([]);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };

  // display form
  const DisplayForm = () => (
    <form>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <p>{"Drag your files here or click in this area."}</p>
      <button type="submit" onClick={onFileUpload}>Upload</button>
    </form>


  )

  console.log(blobList);


  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          return (
            <li key={item}>
              <div>
                {Path.basename(item)}
                <br />
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  //End previous storage code

  const removeFile = (id: any) => {
    setFileSelected(fileSelected.filter((x) => x.id !== id));
  };

  const dropzoneStyle = {
    background: "ffffff"
  }

  const UploadArea = () => (
    <div className="upload-area">
      <Dropzone
        onChange={onFileChange}
        value={fileSelected}
        accept="text/csv"
        label="click or drop your files here"
        maxFiles={1}
        maxFileSize={104857600}
        style={dropzoneStyle}
      >
        {fileSelected.length > 0 &&
          fileSelected.map((file) => (
            <FileItem
              {...file}
              onDelete={removeFile}
              key={file.id}
              info
            />
          ))}

      </Dropzone>
      <div className="box has-text-centered">
        <button type="submit" className="button is-primary" onClick={onFileUpload}>Upload File</button>
      </div>
    </div>
  )
  
  console.log(storageConfigured)
  console.log(blobList);

  return (
    <PageLayout name={name}>
      <AuthenticatedTemplate>
        <UploadArea />

      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        
      </UnauthenticatedTemplate>
    </PageLayout>
  );
  
};

export default App;