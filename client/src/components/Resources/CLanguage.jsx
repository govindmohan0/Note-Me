import React, { useState } from "react";
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const CLangauge = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to the C Language
    const cLanguageOptions = [
        { name: 'Introduction', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Advanced C', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Data Structures', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-Me/master/Govind%20Mohan%20Shah%20Resume.pdf'},
        { name: 'Algorithms', pdfUrl: 'https://www.some-other-pdf-url.com/algorithms.pdf' },
        { name: 'System Programming', pdfUrl: 'https://www.some-other-pdf-url.com/system-programming.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },  
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        { name: 'Operating Systems', pdfUrl: 'https://www.some-other-pdf-url.com/operating-systems.pdf' },
        // https://github.com/govindmohan0/Note-Me/blob/master/Govind%20Mohan%20Shah%20Resume.pdf

        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={cLanguageOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10 pb-4 mb-4 mt-7">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default CLangauge;
