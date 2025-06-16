import React, { useState } from 'react';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('https://3.77.73.3:8080/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.text();
      setStatus(`Upload status: ${data}`);
    } catch (err) {
      console.error(err);
      setStatus('Upload failed');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
      <div>{status}</div>
    </form>
  );
};

export default UploadComponent;
