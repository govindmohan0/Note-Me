import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const CN = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to the C Language
    const CNoption = [
        { name: 'Introduction', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Advanced C', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Data Structures', pdfUrl: 'https://www.some-other-pdf-url.com/data-structures.pdf' },
        { name: 'Algorithms', pdfUrl: 'https://www.some-other-pdf-url.com/algorithms.pdf' },
        { name: 'System Programming', pdfUrl: 'https://www.some-other-pdf-url.com/system-programming.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
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
