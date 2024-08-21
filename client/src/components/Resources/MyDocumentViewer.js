import React, { useEffect } from 'react';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from '@react-pdf-viewer/zoom'; // Import the zoom plugin
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const MyDocumentViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();

  useEffect(() => {
    if (zoomPluginInstance && zoomPluginInstance.zoomTo) {
      zoomPluginInstance.zoomTo(1.0); // Set zoom to 100%
    }
  }, [zoomPluginInstance]);

  return (
    <div className="flex justify-center items-center h-full w-full bg-zinc-800 p-4 rounded-lg shadow-lg mt-7">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
        <div className="w-full h-full max-w-full max-h-full overflow-auto">
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default MyDocumentViewer;
