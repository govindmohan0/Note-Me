import React, { useEffect, useState, useRef } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../../../constants/languageOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { defineTheme } from "../../../lib/defineTheme";
import useKeyPress from "../../../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";

const javascriptDefault = `
// Define the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Log each even number to the console
evenNumbers.forEach(num => console.log(num));
`;

const Landing = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  const onChange = (action, data) => {
    if (action === "code") {
      setCode(data);
    } else {
      console.warn("case not handled!", action, data);
    }
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then((response) => {
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        const error = err.response ? err.response.data : err;
        const status = err.response?.status;
        if (status === 429) {
          showErrorToast(
            "Quota of 100 requests exceeded for the Day!",
            10000
          );
        }
        setProcessing(false);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_RAPID_API_URL}/${token}`,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast();
        return;
      }
    } catch (err) {
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then(() => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme("oceanic-next").then(() =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || "Compiled Successfully!", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const showErrorToast = (msg, timer) => {
    toast.error(msg || "Something went wrong! Please try again.", {
      position: "top-right",
      autoClose: timer || 1000,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />

      {/* Dropdowns Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 bg-gray-100 dark:bg-black dark:text-gray-100 rounded-xl">
        <div className="w-full sm:w-auto px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="w-full sm:w-auto px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-start px-4 py-4 dark:bg-zinc-900 rounded-3xl">
        {/* Code Editor Window */}
        <div className="flex flex-col w-full lg:w-2/3 h-full justify-start items-end border-2 border-gray-800 rounded-lg">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        {/* Output and Custom Input Section */}
        <div className="right-container flex flex-col lg:w-1/3 w-full dark:bg-black border-2 border-gray-800 rounded-xl p-4 space-y-4">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <button
              onClick={handleCompile}
              disabled={!code}
              className={`mt-4 w-full lg:w-auto border-2 rounded-md shadow-lg px-4 py-2 transition duration-300 ${
                processing
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  );
};

export default Landing;
