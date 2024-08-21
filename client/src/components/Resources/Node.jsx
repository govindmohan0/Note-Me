import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const Node = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Introduction_to_NodeJS.pdf"
    );

    // Define options specific to eBooks
    const EbookOptions = [
        { name: 'Introduction to Node Js', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Introduction_to_NodeJS.pdf' },
        { name: 'Modules and NPM', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Modules_and_NPM.pdf' },
        { name: 'ExpressJS', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/ExpressJS.pdf' },
        { name: 'File System and Streams', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/File_System_and_Streams.pdf' },
        { name: 'Asynchronous Programming', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Asynchronous_Programming.pdf'},
        { name: 'Database Integration', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Database_Integration.pdf'},
         {name: 'Error Handling and Debugging', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Nodejs/Error_Handling_and_Debugging.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={EbookOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default Node;
