import React, { use, useState } from 'react'
import Card from './components/card.jsx'

function App() {
  const [imageUrl, setImageUrl] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [description, setDescription] = useState("")

  const [allUsers, setAllUsers] = useState([])



  function handleSubmit(e) {
    e.preventDefault()
    console.log({
      imageUrl,
      name,
      role,
      description
    })
    const oldUsers = [...allUsers]
    oldUsers.push({
      imageUrl,
      name,
      role,
      description
    })
    setAllUsers(oldUsers)
    

    setImageUrl("")
    setName("")
    setRole("")
    setDescription("")
  }
  function handleDelete(idx){
    const copyUsers = [...allUsers];
    copyUsers.splice(idx,1);
    setAllUsers(copyUsers)
  }

 

  return (
    <div className='container'
      style={{
        minHeight: "100vh",
         display: "flex",
    gap: "20px",
    marginTop: "20px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h2>Profile Form</h2>

      <form className='form'
        onSubmit={(e) =>
          handleSubmit(e)
        }
      >
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}

        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}

        />

        <input
          type="text"
          name="role"
          placeholder="Your Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value)
          }}

        />

        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}

        />

        <button type="submit" >
          Submit
        </button>
      </form>
      {allUsers.map((elem, idx)=>{

        return <Card elem={elem} idx={idx} handleDelete={handleDelete} />
      })}
    </div>
  );
}

export default App
