import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
      //console.log("Uppercash Clicked ..  " + text.toUpperCase() )
      setText(text.toUpperCase())
  }

   const handleLowClick=()=>{
      //console.log("Uppercash Clicked ..  " + text.toUpperCase() )
      setText(text.toUpperCase())
  }


  const handleOnChange=(event)=>{
     // console.log("On Change...")
      setText(event.target.value)
  }

  const [text, setText] = useState('Enter Some Text Here');

  return (
    <>
    
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-outline-success mx-2" onClick={handleUpClick} type="submit">Upper</button>
        <button className="btn btn-outline-success mx-2" onClick={handleLowClick} type="submit">Lower</button>
        <button type="button" className="btn btn-primary">Primary</button>

    </div>
    <div className="container my-3" >
      <h2>Enter Your Text</h2>
      <p>{text.split(" ").length} words and  {text.length} Characters </p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <p>Preview</p>
      <p>{text}</p>
    </div>
  </>
  )
}
