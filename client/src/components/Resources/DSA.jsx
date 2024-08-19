import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const DSA = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to the DSA subject
    const DSAoptions = [
        { name: 'Introduction to DSA', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Arrays and Linked Lists', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Stacks and Queues', pdfUrl: 'https://www.some-other-pdf-url.com/stacks-queues.pdf' },
        { name: 'Trees and Graphs', pdfUrl: 'https://www.some-other-pdf-url.com/trees-graphs.pdf' },
        { name: 'Sorting and Searching', pdfUrl: 'https://www.some-other-pdf-url.com/sorting-searching.pdf' },
        { name: 'Dynamic Programming', pdfUrl: 'https://www.some-other-pdf-url.com/dynamic-programming.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={DSAoptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default DSA;
