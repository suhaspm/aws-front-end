import { useState, useEffect } from 'react';
import UploadComponent from './UploadComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeploymentsList from './DeploymentList';

function App() {
  const [status, setStatus] = useState('');
  const [input, setInput] = useState('');
  const [deployments, setDeployments] = useState([]);

  // useEffect(() => {
  //   fetch('http://3.77.73.3:8080/api/deployments')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDeployments(data);
  //     })
  //     .catch((err) => console.error('Failed to fetch deployments:', err));
  // }, []);

  return (
    <Router>
    <div style={{ padding: 20 }}>
      {/* <h2>All Deployments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Deployment ID</th>
            <th>S3 URL</th>
          </tr>
        </thead>
        <tbody>
          {deployments.map((item, index) => (
            <tr key={index}>
              <td>{item.deploymentId?.s}</td>
              <td>
                <a href={item.s3Url?.s} target="_blank" rel="noopener noreferrer">
                  {item.s3Url?.s}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <UploadComponent/>
      <Routes>
        <Route path="/deployments" element={<DeploymentsList />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;