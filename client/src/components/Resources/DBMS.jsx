import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const DBMS = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to the DBMS subject
    const DBMSoptions = [
        { name: 'Introduction to DBMS', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'Relational Model', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'SQL Basics', pdfUrl: 'https://www.some-other-pdf-url.com/sql-basics.pdf' },
        { name: 'Normalization', pdfUrl: 'https://www.some-other-pdf-url.com/normalization.pdf' },
        { name: 'Transaction Management', pdfUrl: 'https://www.some-other-pdf-url.com/transaction-management.pdf' },
        { name: 'Indexing and Hashing', pdfUrl: 'https://www.some-other-pdf-url.com/indexing-hashing.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={DBMSoptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default DBMS;
