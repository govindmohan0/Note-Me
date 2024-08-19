import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const Ebook = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to eBooks
    const EbookOptions = [
        { name: 'Introduction to eBooks', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Ebook Formats and Standards', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Creating eBooks', pdfUrl: 'https://www.some-other-pdf-url.com/creating-ebooks.pdf' },
        { name: 'eBook Readers and Platforms', pdfUrl: 'https://www.some-other-pdf-url.com/ebook-readers.pdf' },
        { name: 'Publishing eBooks', pdfUrl: 'https://www.some-other-pdf-url.com/publishing-ebooks.pdf' },
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

export default Ebook;
