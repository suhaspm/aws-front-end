import { useState } from 'react';
import axios from 'axios';

function DeploymentTrigger() {
  const [response, setResponse] = useState('');

  const handleCreateDeployment = async () => {
    try {
      const res = await axios.post('https://localhost:8080/api/create-deployment');
      setResponse(res.data);
    } catch (error) {
      setResponse(`Error: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleCreateDeployment}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Deployment
      </button>
      {response && (
        <p className="mt-4 text-gray-800">
          <strong>Response:</strong> {response}
        </p>
      )}
    </div>
  );
}

export default DeploymentTrigger;
