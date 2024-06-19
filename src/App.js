import React, { useState } from 'react';
import Home from './components/Home';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [view, setView] = useState('home'); // "home", "datasets", "createDataset"
  const [newDatasetName, setNewDatasetName] = useState('');
  const [uploadedDataset, setUploadedDataset] = useState(null); // State to hold uploaded dataset details
  const [showChat, setShowChat] = useState(false); // State to manage chat interface visibility

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).map(file => ({
      name: file.name,
      date: new Date().toLocaleString(),
      exam: 'UPSC',
      subjectName: 'History',
      embedded: false,
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleDeleteFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSaveDataset = () => {
    const newDataset = {
      name: newDatasetName,
      totalFiles: files.length,
      format: 'zip',
      exam: 'UPSC',
      subject: true,
      files: files
    };
    setDatasets([...datasets, newDataset]);
    setUploadedDataset(newDataset); // Set uploaded dataset for displaying details
    setView('datasets');
    setFiles([]);
    setNewDatasetName('');
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const renderContent = () => {
    if (view === 'datasets') {
      return <Home datasets={datasets} />;
    } else if (view === 'createDataset') {
      return (
        <div className="file-upload-popup">
          <h2>Create New Dataset</h2>
          <input
            type="text"
            placeholder="Dataset Name"
            value={newDatasetName}
            onChange={(e) => setNewDatasetName(e.target.value)}
          />
          <input type="file" multiple onChange={handleFileChange} />
          <button onClick={handleSaveDataset}>Upload</button>
        </div>
      );
    } else {
      return (
        <div className="welcome-page">
          <h2>Welcome to Mobishaala AI</h2>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1>Mobishaala AI</h1>
      <div className="buttons">
        <button onClick={() => setView('datasets')}>Datasets</button>
        <button onClick={() => setView('createDataset')}>Create Dataset</button>
        <button onClick={toggleChat}>Chat</button>
      </div>
      {renderContent()}
      {uploadedDataset && (
        <div className="uploaded-dataset-details">
          <h3>Uploaded Dataset Details</h3>
          <p>Name: {uploadedDataset.name}</p>
          <p>Total Files: {uploadedDataset.totalFiles}</p>
          <p>Format: {uploadedDataset.format}</p>
          <p>Exam: {uploadedDataset.exam}</p>
          <p>Subject: {uploadedDataset.subject ? 'Yes' : 'No'}</p>
        </div>
      )}
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default App;
