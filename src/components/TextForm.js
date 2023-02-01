import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
      //console.log("Uppercash Clicked ..  " + text.toUpperCase() )
      setText(text.toUpperCase())
  }
  const handleOnChange=(event)=>{
     // console.log("On Change...")
      setText(event.target.value)
  }

  const [text, setText] = useState('Enter Some Text Here');

  return (
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-outline-success" onClick={handleUpClick} type="submit">Search</button>
    </div>
  )
}
