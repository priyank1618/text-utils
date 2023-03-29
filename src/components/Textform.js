import React,{useState} from 'react'


export default function Textform(props) {

    //  uppercase function
    const handleUpclick = () => {
       
        // this function invoke when click on button

        // this is way to change the state by using hooks

        let Newtext = text.toUpperCase();

        setText(Newtext);

        props.showalert("Converted to uppercase","success")
    }


    //lowercase function 

    const handleLoclick = () => {
       
        // this function invoke when click on button

        // this is way to change the state by using hooks

        let Newtext = text.toLowerCase();

        setText(Newtext);

        props.showalert("Converted to lowercase","success")
    }

    //cleartext function
    const ClearClick = () => {
       
        // this function invoke when click on button

        // this is way to change the state by using hooks

        let Newtext = '';

        setText(Newtext);

        props.showalert("Text has cleard","success")
    }


    //copy function
    const handlecopy = () => {
       
        // this function invoke when click on button

       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();

       props.showalert("Text has copied","success")

       
    }


     // remove extra spaces function
    const handleExtraspace =() => {
     
        // IT IS DONE BY REGULAR EXPRESSIONS


        let Newtext =text.split(/[ ]+/);
        setText(Newtext.join(" "));

        props.showalert("Extraspaces has removed","success")
    }

     //handle click function 
    const handleOnchange = (event) => {
        
        // this function will change the text in text area

         setText(event.target.value);
    }


    // it will first use the text and after setting setText it will use thatone use to update text
    //it is one type of hook

    const[text,setText] = useState('');
    
    return (

        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1  className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox"  onChange={handleOnchange} style={{backgroundColor: props.mode===  'dark' ? '#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}  value={text} rows={9} defaultValue={""} >  </textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"   onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"   onClick={handleLoclick}>Convert to Lowercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"   onClick={ClearClick}>Clear Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"   onClick={handlecopy}>Copy Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"   onClick={handleExtraspace}>Remove Extraspaces </button>
        </div>
        
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g,"").length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
       </>
    ) 
}
