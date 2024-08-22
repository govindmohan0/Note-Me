import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const DSA = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/1%20Data%20Structure%20introduction.pdf"
    );

    // Define options specific to the DSA subject
    const DSAoptions = [
        { name: 'Introduction to DSA', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/1%20Data%20Structure%20introduction.pdf' },
        { name: 'DSA Classification', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/2%20Data%20structure%20classification.pdf' },
        { name: 'Intro To DSA', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/3%20Intro%20to%20DSA.pdf' },
        { name: 'Asymptotic Analysis', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/4%20Asymptotic%20analysis.pdf' },
        { name: 'Pointers', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/5%20DS_pointer.pdf' },
        { name: 'Structures', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/6%20DS_Structure.pdf' },
        { name: 'Arrays ', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/7%20DS_Array.pdf' },
        { name: 'Linked List', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/8%20DS_Linkedlist.pdf' },
        { name: 'Skip List', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/9%20DS_SkipList.pdf' },
        { name: 'Stack', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/10%20DS_Stack.pdf' },
        { name: 'Queue', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/11%20DS_Queue.pdf' },
        { name: 'Stack and Queue Animated', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/Stack%20and%20Queue.pdf' },
        { name: 'Tree', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/12%20DS_Trees.pdf' },
        { name: 'Types of Tree', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/13%20DS_Types%20of%20Tress.pdf' },
        { name: 'Tree Animated', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/Tree%20Part%201.pdf' },
        { name: 'Recursion and Backtracking', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/Recursion%20and%20backtracking.pdf' },
        { name: 'Graph', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/14%20DS%20Graph.pdf' },
        { name: 'Graph Traversal', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/15%20Graph%20Traversal%20Algorithm.pdf' },
        { name: 'Searching', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/16%20Searching.pdf' },
        { name: 'Sorting', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/17%20Sorting%20Algorithm.pdf' },
        { name: 'DSA Interview Questions', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/18%20DS%20Interview%20Question%20answers.pdf' },
        { name: 'DSA Coding Questions', pdfUrl: 'https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/DSA/19%20DS%20Coding%20Questions.pdf' },
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
