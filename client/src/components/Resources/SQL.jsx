import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const SQL = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/1%20Database.pdf"
    );

    // Define options specific to SQL
    const SQLOptions = [
        { name: 'Introduction to SQL', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/1%20Database.pdf' },
        { name: 'SQL Basics', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/2%20SQL.pdf' },
        { name: 'How Does SQL Works', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/3%20How%20does%20SQL%20works.pdf' },
        { name: 'Constraints', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/4%20SQL%20constraints.pdf' },
        { name: 'SQL Query Execution', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/5%20SQL%20query%20execution%20order.pdf' },
        { name: 'SQL Operations', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/6%20operations.pdf' },
        { name: 'Errors in SQL', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/7%20Errors%20in%20SQL.pdf' },
        { name: 'Joins', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/8%20SQL%20Joins.pdf' },
        { name: 'Keys', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/9%20keys.pdf' },
        { name: 'Comit and Rollback', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/SQL/10%20comit%20and%20rollbacks.pdf' },



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
