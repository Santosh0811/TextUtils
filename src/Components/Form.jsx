import React, { useState } from 'react'
import { LuCaseUpper, LuCaseLower, LuCopy, LuList, LuEraser, LuRotateCcw, LuLock, LuLockKeyholeOpen , LuMinimize, LuMaximize, LuBraces, LuFileJson, LuFileCode, LuTrash2 } from "react-icons/lu";

const Form = (props) => {
    const [textInput, setTextInput] = useState("");

    const handleUpclick = () => {
        let newTextInput = textInput.toUpperCase()
        setTextInput(newTextInput)
        props.showAlert("success", "UpperCase Converted")
    }

    const handleLowclick = () => {
        let newTextInput = textInput.toLowerCase()
        setTextInput(newTextInput)
        props.showAlert("success", "LowerCase Converted")
    }

    const handleCopyclick = () => {
        navigator.clipboard.writeText(textInput);
        props.showAlert("success", "Text Copied")
    }

    const handleCopyAsOneLine = async () => {
        if (!textInput) return;

        const oneLineText = textInput.replace(/\s+/g, " ").trim();

        await navigator.clipboard.writeText(oneLineText);

        props.showAlert("success", "Text Copied")
    };


    const handleRemExtSpcclick = () => {
        let newTextInput = textInput.split(/[ ]+/);
        setTextInput(newTextInput.join(" "));
        props.showAlert("success", "Extra Spaces Removed")
    }

    const handleClsclick = () => {
        setTextInput("")
        props.showAlert("success", "Text Cleared")
    }

    const handleReverseclick = () => {
        let newTextInput = textInput.split("").reverse().join("");
        setTextInput(newTextInput);
        props.showAlert("success", "Text Reversed")
    }

    const handleEncryptclick = () => {
        let newTextInput = caesarCipher(textInput, 3);
        setTextInput(newTextInput);
        props.showAlert("success", "Text Encrypted")
    }

    const handleDecryptclick = () => {
        let newTextInput = caesarCipher(textInput, -3);
        setTextInput(newTextInput);
        props.showAlert("success", "Text Decrypted")
    }

    const handleCompressclick = () => {
        let newTextInput = textInput.replace(/\s+/g, " ");
        setTextInput(newTextInput);
        props.showAlert("success", "Text Compressed")
    }

    const handleDecompressclick = () => {
        let newTextInput = textInput.replace(/ /g, "  ");
        setTextInput(newTextInput);
        props.showAlert("success", "Text Decompressed")
    }

    const handleToJson = () => {
        if (!textInput || textInput.trim() === "") {
            props.showAlert("danger", "Text is empty. Cannot convert to JSON");
            return;
        }

        try {
            let formattedInput = textInput.trim();
            formattedInput = formattedInput.replace(/\\+/g, "");

            const lines = formattedInput.split("\n");
            const jsonObject = {};

            lines.forEach(line => {
                const [key, value] = line.split(":").map(item => item.trim());

                if (!key || !value) {
                    throw new Error("Invalid TEXT format");
                }

                jsonObject[key] = value;
            });

            const jsonString = JSON.stringify(jsonObject, null, 2);
            setTextInput(jsonString);
            props.showAlert("success", "Successfully converted to JSON");
        } catch (error) {
            console.error("Error:", error.message);
            props.showAlert("danger", `${error.message}`);
        }
    };

    const handleFromJson = () => {
        if (!textInput || textInput.trim() === "") {
            props.showAlert("danger", "Text is empty. Cannot convert from JSON");
            return;
        }
        try {
            const parsedData = JSON.parse(textInput);

            const formatAsText = (data) => {
                if (typeof data === 'object' && !Array.isArray(data)) {
                    return Object.entries(data).map(([key, value]) => {

                        return `${key}: ${typeof value === 'object' ? formatAsText(value) : value}`;
                    }).join('\n');
                } else if (Array.isArray(data)) {
                    return data.map((item, index) => {

                        return `Item ${index + 1}: ${formatAsText(item)}`;
                    }).join('\n');
                }
                return data;
            };

            const readableText = formatAsText(parsedData);

            setTextInput(readableText);
            props.showAlert("success", "Successfully converted from JSON");
        } catch (error) {
            console.error("Error parsing JSON");
            props.showAlert("danger", "Invalid JSON format");
        }
    }

    const handleToXml = () => {
        if (!textInput || textInput.trim() === "") {
            props.showAlert("danger", "Text is empty. Cannot convert to XML");
            return;
        }
        if (textInput.trim().startsWith("<textInput>")) {
            props.showAlert("warning", "Text has already been converted to XML");
            return;
        }

        try {
            let xmlOutput = `<textInput>\n`;
            textInput.split("\n").forEach(line => {
                xmlOutput += `<line>${line.trim()}</line>\n`;
            });
            xmlOutput += `</textInput>`;

            setTextInput(xmlOutput);
            props.showAlert("success", "Converted to XML (Text)");
        } catch (error) {
            console.error("Error in XML Conversion");
            props.showAlert("danger", "Error in XML Conversion");
        }
    };

    const handleFromXml = () => {
        if (!textInput || textInput.trim() === "") {
            props.showAlert("danger", "Text is empty. Cannot convert from XML");
            return;
        }

        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(textInput, "application/xml");

            const parserError = xmlDoc.getElementsByTagName("parsererror");
            if (parserError.length > 0) {
                props.showAlert("danger", "Error in XML Parsing");
                return;
            }
            const rootElement = xmlDoc.documentElement;
            if (rootElement) {
                const textContent = rootElement.textContent || rootElement.innerText || '';

                if (textContent) {
                    setTextInput(textContent.trim());
                    props.showAlert("success", "Converted from XML (Content)");
                } else {
                    props.showAlert("danger", "Empty root element content");
                }
            } else {
                props.showAlert("danger", "Invalid XML structure");
            }
        } catch (error) {
            console.error("XML Parsing Error");
            props.showAlert("danger", "Error in XML Parsing");
        }
    };

    const handleOnChange = (event) => {
        setTextInput(event.target.value)
    }

    const caesarCipher = (str, shift) => {
        return str.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                const startCode = char >= 'a' && char <= 'z' ? 97 : 65;
                return String.fromCharCode(((char.charCodeAt(0) - startCode + shift + 26) % 26) + startCode);
            }
            return char;
        }).join('');
    }

    return (
        <>
            <div className='d-flex p-4 gap-2 form-1'>
                <div className='p-2 container border border-2 rounded-2 h-100 form-2'>
                    <div className="p-2">
                        <textarea className="form-control" id="myBox" value={textInput} onChange={handleOnChange} rows="5" style={{ backgroundColor: "black", color: "white" }}></textarea>
                    </div>

                    <div className="button-container d-flex flex-wrap text-white">

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleUpclick}
                        >
                            <LuCaseUpper className="me-1" />
                            Upper Case
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleLowclick}
                        >
                            <LuCaseLower className="me-1" />
                            Lower Case
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleCopyclick}
                        >
                            <LuCopy className="me-1" />
                            Copy Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleCopyAsOneLine}
                        >
                            <LuList className="me-1" />
                            Copy as One Line
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleRemExtSpcclick}
                        >
                            <LuEraser className="me-1" />
                            Remove Extra Spaces
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleReverseclick}
                        >
                            <LuRotateCcw className="me-1" />
                            Reverse Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleEncryptclick}
                        >
                            <LuLock className="me-1" />
                            Encrypt Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleDecryptclick}
                        >
                            <LuLockKeyholeOpen  className="me-1" />
                            Decrypt Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleCompressclick}
                        >
                            <LuMinimize className="me-1" />
                            Compress Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleDecompressclick}
                        >
                            <LuMaximize className="me-1" />
                            Decompress Text
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleToJson}
                        >
                            <LuBraces className="me-1" />
                            Convert to JSON
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleFromJson}
                        >
                            <LuFileJson className="me-1" />
                            Convert from JSON
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleToXml}
                        >
                            <LuFileCode className="me-1" />
                            Convert to XML
                        </button>

                        <button
                            className="btn mx-2 my-1 btn-primary shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleFromXml}
                        >
                            <LuFileCode className="me-1" />
                            Convert from XML
                        </button>

                        <button
                            className="btn mx-2 my-1 bg-danger text-white shadow-sm"
                            disabled={textInput.length === 0}
                            style={{ borderRadius: '8px' }}
                            onClick={handleClsclick}
                        >
                            <LuTrash2 className="me-1" />
                            Clear All
                        </button>

                    </div>


                </div>

                <div className='p-2 container form-2'>
                    <div className='p-2 border border-2 rounded-2 text-white'>
                        <h6 className='bg-body-secondary text-black fw-bold text-center p-1 rounded-2'>Text Summary</h6>
                        <p style={{ fontSize: "13px" }}>
                            {textInput.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {textInput.length} characters
                        </p>
                        <p style={{ fontSize: "13px" }}>
                            {0.008 * textInput.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read
                        </p>
                    </div>

                    <div className='mt-2 p-2 border border-2 rounded-2 text-white'>
                        <h6 className='bg-body-secondary text-black fw-bold text-center p-1 rounded-2'>Preview</h6>
                        <p className='w-100 text-wrap overflow-auto' style={{ wordBreak: 'break-word', fontSize: "13px" }}>
                            {textInput.length > 0 ? textInput : "Write Something Above to Preview it Here"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;