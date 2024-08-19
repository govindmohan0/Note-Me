import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const Java = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to Java programming
    const JavaOptions = [
        { name: 'Introduction to Java', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Java Basics', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Object-Oriented Programming', pdfUrl: 'https://www.some-other-pdf-url.com/oop-java.pdf' },
        { name: 'Advanced Java Features', pdfUrl: 'https://www.some-other-pdf-url.com/advanced-java.pdf' },
        { name: 'Java Collections Framework', pdfUrl: 'https://www.some-other-pdf-url.com/java-collections.pdf' },
        { name: 'Java Concurrency', pdfUrl: 'https://www.some-other-pdf-url.com/java-concurrency.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={JavaOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default Java;
