import React, { useState } from 'react'

const FormHandling = () => {
    // using useState for form handling but for multiple input field we canot use the usestate for each it will consume more time:
    // let[myname, setmyname]=useState("")
    // let[myemail, setmyemail]=useState("")
    // let[mynum, setmynum]=useState("")

    // converting three useState into one
    let [form, setform] = useState({
      myname:"",
      myemail:"",
      mynum:""
    })

    // function for handleChange
    let handleChange=(e)=>{
      //spread operator:
      setform({ ...form, [e.target.name]: e.target.value})
    }


    // function handleSubmit 
    let handleSubmit=(e)=>{
        // stop the refresh of the page on submiting form
        e.preventDefault()
        alert (
            // `
            // myname=${myname} and
            // myemail is ${myemail} and
            // mynum is ${mynum}
            // `

            `
            myname=${form.myname} and
            myemail is ${form.myemail} and
            mynum is ${form.mynum}
            `


        )
    }

  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>

        {/* Enter Name : <input type='text' value={myname} onChange={(e)=>{setmyname(e.target.value)}}></input><br></br><br></br> */}
        {/* Enter Email : <input type='text' value={myemail} onChange={(e)=>{setmyemail(e.target.value)}}></input><br></br><br></br> */}
        {/* Enter Number : <input type='text' value={mynum} onChange={(e)=>{setmynum(e.target.value)}}></input><br></br><br></br> */}
        {/* <button type='submit'>Form Handle</button> */}

        Enter Name : <input type='text' name="myname" value={form.myname} onChange={handleChange}></input><br></br><br></br>
        Enter Email : <input type='text' name="myemail" value={form.myemail} onChange={handleChange}></input><br></br><br></br>
        Enter Number : <input type='text' name="mynum" value={form.mynum} onChange={handleChange}></input><br></br><br></br>
        <button type='submit'>Form Handle</button>


      </form>
    </>
  )
}

export default FormHandling
