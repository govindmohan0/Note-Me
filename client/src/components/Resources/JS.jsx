import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const JS = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C1-Variables%20and%20Data.pdf"
    );

    // Define options specific to JavaScript
    const JSOptions = [
        { name: 'Variable and  Data', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C1-Variables%20and%20Data.pdf' },
        { name: 'Expressions and Conditions', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C2-Expressions%20and%20Conditionals.pdf' },
        { name: 'Loops and Functions', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C3-Loops%20and%20Functions.pdf' },
        { name: 'Strings', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C4-Strings.pdf' },
        { name: 'Arrays', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C5-Arrays.pdf' },
        { name: 'JavaScript in the browser', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C6-JavaScript%20in%20the%20browser.pdf' },
        { name: 'Walking the DOM', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C7-Walking%20the%20DOM.pdf' },
        { name: 'Event And Other DOM Property', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C8-Events%20and%20other%20DOM%20properties.pdf' },
        { name: 'Callback, Promises and Async', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C9-Callbacks%2CPromises%20and%20async.pdf' },
        { name: 'Object Oriented Programming', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C10-Object%20Oriented%20Programming.pdf' },
        { name: 'Advanced Javascript', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/C11-Advanced%20JavaScript.pdf' },
        { name: 'Exercise', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Javascript/Exercise.pdf' },
       
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
