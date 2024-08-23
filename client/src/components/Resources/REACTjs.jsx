import React, { useState } from 'react';
import MyDocumentViewer from "./MyDocumentViewer";
import Sidebar from "../Sidebar";

const REACTjs = () => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/1%20Getting%20started%20with%20React.pdf"
    );

    // Define options specific to React
    const ReactOptions = [
        { "name": "Getting started with React", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/1%20Getting%20started%20with%20React.pdf" },
        { "name": "Components", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/2%20Components.pdf" },
        { "name": "Using ReactJS with TypeScript", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/3%20Using%20ReactJS%20with%20TypeScript.pdf" },
        { "name": "State in React", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/4%20State%20in%20React.pdf" },
        { "name": "Props in React", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/5%20Props%20in%20React.pdf" },
        { "name": "React Component Lifecycle", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/6%20React%20Component%20Lifecycle.pdf" },
        { "name": "Forms and User Input", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/7%20Forms%20and%20User%20Input.pdf" },
        { "name": "React Boilerplate [React + Babel + Webpack]", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/8%20React%20Boilerplate%20[React%20+%20Babel%20+%20Webpack].pdf" },
        { "name": "Using ReactJS with jQuery", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/9%20Using%20ReactJS%20with%20jQuery.pdf" },
        { "name": "React Routing", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/10%20React%20Routing.pdf" },
        { "name": "Communicate Between Components", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/11%20Communicate%20Between%20Components.pdf" },
        { "name": "How to setup a basic webpack, react and babel environment", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/12%20How%20to%20setup%20a%20basic%20webpack,%20react%20and%20babel%20environment.pdf" },
        { "name": "React.createClass vs extends React.Component", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/13%20React.createClass%20vs%20extends%20React.Component.pdf" },
        { "name": "React AJAX call", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/14%20React%20AJAX%20call.pdf" },
        { "name": "Communication Between Components", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/15%20Communication%20Between%20Components.pdf" },
        { "name": "Stateless Functional Components", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/16%20Stateless%20Functional%20Components.pdf" },
        { "name": "Performance", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/17%20Performance.pdf" },
        { "name": "Introduction to Server-Side Rendering", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/18%20Introduction%20to%20Server-Side%20Rendering.pdf" },
        { "name": "Setting Up React Environment", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/19%20Setting%20Up%20React%20Environment.pdf" },
        { "name": "Using React with Flow", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/20%20Using%20React%20with%20Flow.pdf" },
        { "name": "JSX", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/21%20JSX.pdf" },
        { "name": "React Forms", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/22%20React%20Forms.pdf" },
        { "name": "User interface solutions", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/23%20User%20interface%20solutions.pdf" },
        { "name": "Using ReactJS in Flux way", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/24%20Using%20ReactJS%20in%20Flux%20way.pdf" },
        { "name": "React, Webpack & TypeScript installation", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/25%20React,%20Webpack%20&%20TypeScript%20installation.pdf" },
        { "name": "How and why to use keys in React", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/26%20How%20and%20why%20to%20use%20keys%20in%20React.pdf" },
        { "name": "Keys in react", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/27%20Keys%20in%20react.pdf" },
        { "name": "Higher Order Components", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/28%20Higher%20Order%20Components.pdf" },
        { "name": "React with Redux", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/29%20React%20with%20Redux.pdf" },
        { "name": "Appendix", "pdfUrl": "https://raw.githubusercontent.com/govindmohan0/Note-me-Notes/main/Reactjs/30%20Appendix.pdf" }
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
