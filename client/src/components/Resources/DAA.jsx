import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const DAA = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to the DAA subject
    const DAAoptions = [
        { name: 'Introduction to Algorithms', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Divide and Conquer', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Dynamic Programming', pdfUrl: 'https://www.some-other-pdf-url.com/dynamic-programming.pdf' },
        { name: 'Greedy Algorithms', pdfUrl: 'https://www.some-other-pdf-url.com/greedy-algorithms.pdf' },
        { name: 'Graph Algorithms', pdfUrl: 'https://www.some-other-pdf-url.com/graph-algorithms.pdf' },
        { name: 'Complexity Theory', pdfUrl: 'https://www.some-other-pdf-url.com/complexity-theory.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={DAAoptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default DAA;
