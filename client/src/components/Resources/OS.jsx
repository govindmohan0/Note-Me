import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const OS = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to Operating Systems
    const OSOptions = [
        { name: 'Introduction to Operating Systems', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Processes and Threads', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Memory Management', pdfUrl: 'https://www.some-other-pdf-url.com/memory-management.pdf' },
        { name: 'File Systems', pdfUrl: 'https://www.some-other-pdf-url.com/file-systems.pdf' },
        { name: 'Scheduling Algorithms', pdfUrl: 'https://www.some-other-pdf-url.com/scheduling-algorithms.pdf' },
        { name: 'Deadlock and Synchronization', pdfUrl: 'https://www.some-other-pdf-url.com/deadlock-synchronization.pdf' },
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
