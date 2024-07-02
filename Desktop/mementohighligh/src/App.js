import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [highlightUrl, setHighlightUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setHighlightUrl(`http://localhost:5000/highlights/${response.data.filename}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <h1>Football Match Highlights Generator</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {highlightUrl && (
        <div>
          <h2>Generated Highlights</h2>
          <video controls src={highlightUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
