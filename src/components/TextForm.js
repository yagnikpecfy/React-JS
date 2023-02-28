import React,{useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter Some Text Here');
 // const [searchText, setSearchText] = useState('Search Here');

  const handleUpClick=()=>{
      //console.log("Uppercash Clicked ..  " + text.toUpperCase() )
      setText(text.toUpperCase())
  }

   const handleLowClick=()=>{
      //console.log("Uppercash Clicked ..  " + text.toUpperCase() )
      setText(text.toLowerCase())
  }

   const handleClearClick=()=>{
      setText('')
      
  }

//   const handleSearchText=()=>{
//     console.log(text.indexOf(searchText))
// }


  const handleOnChange=(event)=>{
     // console.log("On Change...")
      setText(event.target.value)
  }

//   const handleOnChangeSearch=(event)=>{
//      setSearchText(event.target.value)
//  }


  return (
    <>
    
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button  type="button" className="btn btn-primary" onClick={handleUpClick}>Upper</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Lower</button>
        <button type="button" className="btn btn-primary" onClick={handleClearClick}>Clear</button>
        <div>
        {/* <input type="search" value={searchText} onChange={handleOnChangeSearch} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 mx-2" onClick={handleSearchText} type="submit">Search</button> */}

        </div>
     
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Enter Your Text</h2>
      <p>{text.split(" ").filter((elements)=>{return elements.length !== 0}).length} words and  {text.length} Characters </p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <p>Preview</p>
      <p>{text}</p>
    </div>
  </>
  )
}
