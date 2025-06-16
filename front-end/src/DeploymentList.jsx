import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeploymentsList = () => {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    const fetchDeployments = async () => {
      try {
        const response = await axios.get('http://3.77.73.3:8080/api/deployments');
        console.log('Fetched deployments:', response.data);
        setDeployments(response.data);
      } catch (error) {
        console.error('Error fetching deployments:', error);
      }
    };

    fetchDeployments();
  }, []);

  const getFileUrl = (bucket, filename) => {
    return `https://${bucket}.s3.amazonaws.com/${filename}`;
  };

  return (
    <div>
      <h2>Deployment List</h2>
      {deployments.length === 0 ? (
        <p>No deployments found.</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Filename</th>
              <th>Bucket</th>
              <th>Upload Time</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((deployment, index) => (
              <tr key={index}>
                <td>{deployment.filename}</td>
                <td>{deployment.bucket}</td>
                <td>{deployment.uploadTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DeploymentsList;
