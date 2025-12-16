import React, { useState } from 'react'

const FormHandling = () => {
    // using useState for form handling
    let[myname, setmyname]=useState("")
    let[myemail, setmyemail]=useState("")
    let[mynum, setmynum]=useState("")

    // function handleSubmit 
    let handleSubmit=(e)=>{
        // stop the refresh of the page on submiting form
        e.preventDefault()
        alert (
            `
            myname=${myname} and
            myemail is ${myemail} and
            mynum is ${mynum}
            `
        )
    }

  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>

        Enter Name : <input type='text' value={myname} onChange={(e)=>{setmyname(e.target.value)}}></input><br></br><br></br>
        Enter Email : <input type='text' value={myemail} onChange={(e)=>{setmyemail(e.target.value)}}></input><br></br><br></br>
        Enter Number : <input type='text' value={mynum} onChange={(e)=>{setmynum(e.target.value)}}></input><br></br><br></br>
        <button type='submit'>Form Handle</button>


      </form>
    </>
  )
}

export default FormHandling
