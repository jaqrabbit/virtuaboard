
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const [boxes, setBoxes] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("https://<your-backend-service-name>.onrender.com/upload", formData);
    setLabels(res.data.labels.filter(Boolean));
    setBoxes(res.data.boxes);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>PCB OCR Visualizer</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Process</button>

      <h2>Extracted Labels:</h2>
      <ul>
        {labels.map((label, idx) => (
          <li key={idx}>{label}</li>
        ))}
      </ul>

      <h2>Detected Boxes (outline):</h2>
      <pre>{JSON.stringify(boxes, null, 2)}</pre>
    </div>
  );
}

export default App;
