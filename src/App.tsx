// ./src/App.tsx

import "./App.css";
import { useState } from 'react';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';
import { Dropzone, FileItem } from "@dropzone-ui/react";

// import React from "react";
import { PageLayout } from "./components/PageLayout";
// Addition
import 'bootstrap/dist/css/bootstrap.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

// End addition


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

	console.log(instance);
	console.log(uploading);
	console.log(inputKey);

	const onFileChange = (incommingFiles: any) => {
		// capture file into state
		setFileSelected(incommingFiles);
	};

	const onFileUpload = async () => {
		// prepare UI
		setUploading(true);

		// *** UPLOAD TO AZURE STORAGE ***
		const blobsInContainer: string[] = await uploadFileToBlob(fileSelected[0].file);

		// prepare UI for results
		setBlobList(blobsInContainer);

		// reset state/form
		setFileSelected([]);
		setUploading(false);
		setInputKey(Math.random().toString(36));
	};

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
				accept=".csv, .xls, .xlsx"
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
				<button type="submit" className="button is-primary" style={{backgroundColor: "#0057B8"}} onClick={onFileUpload}>Upload File</button>
			</div>
		</div>
	)


	return (
		<PageLayout name={name} hasUploaded={storageConfigured && blobList.length > 0} >
			<AuthenticatedTemplate>
				<UploadArea />
			</AuthenticatedTemplate>

			<UnauthenticatedTemplate>
			</UnauthenticatedTemplate>
		</PageLayout>
	);

};

export default App;