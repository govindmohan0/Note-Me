import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const Python = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to Python
    const PythonOptions = [
        { name: 'Introduction to Python', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Python Basics', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Data Structures in Python', pdfUrl: 'https://www.some-other-pdf-url.com/data-structures-python.pdf' },
        { name: 'Object-Oriented Programming in Python', pdfUrl: 'https://www.some-other-pdf-url.com/oop-python.pdf' },
        { name: 'Advanced Python Techniques', pdfUrl: 'https://www.some-other-pdf-url.com/advanced-python.pdf' },
        { name: 'Python Libraries and Frameworks', pdfUrl: 'https://www.some-other-pdf-url.com/python-libraries.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={PythonOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default Python;
