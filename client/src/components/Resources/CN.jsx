import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const CN = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Introduction.pdf"
    );

    const CNoption = [
        { name: 'Introduction to Computer Network', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Introduction.pdf' },
        { name: 'Networking Basics', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Networking_Basics.pdf' },
        { name: 'Data Link Layer', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Data_Link_Layer.pdf' },
        { name: 'Netwrok Layer', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Network_Layer.pdf' },
        { name: 'Transport Layer', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Transport_Layer.pdf' },
        { name: 'Application Layer', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Application_Layer.pdf' },
        { name: 'Network Security', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Network_Security.pdf' },
        { name: 'Advanced Networking', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/CN/Advanced_Networking.pdf' },

     
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={CNoption} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default CN;
