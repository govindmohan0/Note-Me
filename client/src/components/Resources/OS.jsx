import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const OS = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/1%20UNIT%20I.pdf"
    );

    // Define options specific to Operating Systems
    const OSOptions = [
        { name: 'Introduction to Operating Systems', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/1%20UNIT%20I.pdf' },
{ name: 'Processes and Threads', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/2%20UNIT%20II.pdf' },
{ name: 'Memory Management', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/3%20UNIT%20III.pdf' },
{ name: 'File Systems', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/4%20UNIT%20IV.pdf' },
{ name: 'I/O Systems and Security', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/OS/5%20UNIT%20V.pdf' }

      
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={OSOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default OS;
