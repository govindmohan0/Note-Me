import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const JS = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to JavaScript
    const JSOptions = [
        { name: 'Introduction to JavaScript', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'JavaScript Basics', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Functions and Scope', pdfUrl: 'https://www.some-other-pdf-url.com/functions-scope.pdf' },
        { name: 'Asynchronous JavaScript', pdfUrl: 'https://www.some-other-pdf-url.com/async-javascript.pdf' },
        { name: 'JavaScript DOM Manipulation', pdfUrl: 'https://www.some-other-pdf-url.com/dom-manipulation.pdf' },
        { name: 'JavaScript ES6 Features', pdfUrl: 'https://www.some-other-pdf-url.com/es6-features.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={JSOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default JS;
