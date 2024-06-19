import React, { useState } from 'react';
import './index.css';

function Home({ datasets }) {
  const [selectedDataset, setSelectedDataset] = useState(null);

  const handleSelectDataset = (dataset) => {
    setSelectedDataset(dataset);
  };

  return (
    <div className="home-container">
      <h2>Datasets</h2>
      {datasets.length === 0 ? (
        <p>No datasets uploaded.</p>
      ) : (
        <div className="dataset-list">
          {datasets.map((dataset, index) => (
            <div key={index} className="dataset" onClick={() => handleSelectDataset(dataset)}>
              <span className="dataset-name">{dataset.name}</span>
            </div>
          ))}
        </div>
      )}
      {selectedDataset && (
        <div className="dataset-details">
          <h3>Dataset: {selectedDataset.name}</h3>
          <p>Total Files: {selectedDataset.totalFiles}</p>
          <p>Format: {selectedDataset.format}</p>
          <p>Exam: {selectedDataset.exam}</p>
          <p>Subject: {selectedDataset.subject ? 'Yes' : 'No'}</p>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Date</th>
                <th>Exam</th>
                <th>Subject Name</th>
                <th>Attachment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedDataset.files.map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.date}</td>
                  <td>{file.exam}</td>
                  <td>{file.subjectName}</td>
                  <td>{file.name}</td>
                  <td>{file.embedded ? 'Embedded' : 'Not Embedded'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
