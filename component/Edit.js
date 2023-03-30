import {useState} from 'react'

const Edit = (props) => {
  const [cars, setCars] = useState({...props.cars})

  const handleChange = (event) => {
    setCars({...cars, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(cars)
   }

  return(
    <>
      <details>
        <summary>Edit</summary>
        <form onSubmit={handleSubmit}>
  <label htmlFor='name'>Name:</label>
  <input type='text' name='name' onChange={handleChange}/>
  <br/>
  <label htmlFor='conference'>Conference:</label>
  <input type='text' name='conference' onChange={handleChange}/>
  <br/>
  <label htmlFor='logo'>Logo:</label>
  <input type='text' name='logo' onChange={handleChange}/>
  <br/>
  <label htmlFor='Rank'>Seed:</label>
  <input type='text' name='rank' onChange={handleChange}/>
  <input type="submit"/>
</form>
      </details>
    </>
  )
}

export default Edit