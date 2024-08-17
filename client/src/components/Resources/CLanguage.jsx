import React, { useState } from "react";
import MyDocumentViewer from "./MyDocumentViewer";

const CLangauge = () => {
  const [pdfUrl, setPdfUrl] = useState(
    "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
  );

  return (
    <div className=" ">
      <div className="">
        <MyDocumentViewer pdfUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default CLangauge;
