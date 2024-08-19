import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const SQL = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    );

    // Define options specific to SQL
    const SQLOptions = [
        { name: 'Introduction to SQL', pdfUrl: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' },
        { name: 'SQL Basics', pdfUrl: 'https://raw.githubusercontent.com/py-pdf/sample-files/main/004-pdflatex-4-pages/pdflatex-4-pages.pdf' },
        { name: 'Advanced SQL Queries', pdfUrl: 'https://www.some-other-pdf-url.com/advanced-sql-queries.pdf' },
        { name: 'Database Design', pdfUrl: 'https://www.some-other-pdf-url.com/database-design.pdf' },
        { name: 'SQL Optimization', pdfUrl: 'https://www.some-other-pdf-url.com/sql-optimization.pdf' },
        { name: 'Stored Procedures', pdfUrl: 'https://www.some-other-pdf-url.com/stored-procedures.pdf' },
        { name: 'SQL Transactions', pdfUrl: 'https://www.some-other-pdf-url.com/sql-transactions.pdf' },
        // Add more options as needed
    ];

    return (
        <div className="flex h-screen">
            <Sidebar options={SQLOptions} onOptionSelect={setPdfUrl} />
            <div className="flex-1 p-10">
                <MyDocumentViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default SQL;
