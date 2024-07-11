import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }

    const handleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }

    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    // const handleCopy = () => {
    // var text = document.getElementById("#myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }

    // const handleIndexClick = () => {                                                                                                                          
    //     let x = prompt("Enter the index : ");
    //     let index = text.indexOf(x);
    //     alert("Index of "+x+" : "+index);
    // }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const[text,setText] = useState('');
  return (
    <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea  id="myBox" className="form-control" value={text} 
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button> */}
            {/* <button className="btn btn-primary mx-2" onClick={handleIndexClick}>Click to get Index</button> */}
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>



            


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something int the textbox above to preview it here"}</p>

            
        </div>
    </>
  )
}
