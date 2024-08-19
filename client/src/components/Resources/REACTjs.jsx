import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const REACTjs = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to React
    const ReactOptions = [
        { name: 'Introduction to React', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'React Basics', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Components and Props', pdfUrl: 'https://www.some-other-pdf-url.com/components-props.pdf' },
        { name: 'State Management', pdfUrl: 'https://www.some-other-pdf-url.com/state-management.pdf' },
        { name: 'React Hooks', pdfUrl: 'https://www.some-other-pdf-url.com/react-hooks.pdf' },
        { name: 'Routing in React', pdfUrl: 'https://www.some-other-pdf-url.com/react-routing.pdf' },
        { name: 'Advanced React Patterns', pdfUrl: 'https://www.some-other-pdf-url.com/advanced-react.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={ReactOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default REACTjs;
