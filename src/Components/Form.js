import React, { useState } from 'react'

export default function Form(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("success", "UpperCase Converted")
    }

    const handleLowclick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("success", "LowerCase Converted")
    }

    const handleCopyclick = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("success", "Text Copied")
    }

    const handleRemExtSpcclick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra Spaces Removed")
    }

    const handleClsclick = () => {
        setText("")
        props.showAlert("success", "Text Cleared")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
        <div>
            <div className='container'>
                <h2 style={props.textColor}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="5" style={props.myStyle}></textarea>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                    <button className='btn' style={props.btnColor} onClick={handleUpclick}>Upper Case</button>
                    <button className='btn' style={props.btnColor} onClick={handleLowclick}>Lower Case</button>
                    <button className='btn' style={props.btnColor} onClick={handleCopyclick}>Copy Text</button>
                    <button className='btn' style={props.btnColor} onClick={handleRemExtSpcclick}>Remove Extra Spaces</button>
                    <button className='btn' style={props.btnColor} onClick={handleClsclick}>Clear All</button>
                    {/* <button className='btn' style={btnColor} onClick={handleMode}>{btnText}</button> */}
                </div>
            </div>
            <div className='container my-2' style={props.textColor}>
                <h2>
                    Text Summary
                </h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>
                    {0.008 * text.split(" ").length} Minutes read
                </p>
            </div>
            <div className='container' style={props.textColor}>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text:"Write Something Above to Preview it Here"}
                </p>
            </div>
            </div>
        </>
    )
}
