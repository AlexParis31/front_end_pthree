import {useState} from 'react'


const Add = (props) => {

    const [cars, setCars] = useState({image: '', year: '', make: '', model: '', class: '', price: 0})


     
   const handleChange = (event) => {
    setCars({...cars, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(cars)
 }




 return (
  <details class="addForm">
    <summary>Add A New Car</summary>
    <form onSubmit={handleSubmit}>
      <label htmlFor='image'>Image:</label>
      <input type='text' name='image' onChange={handleChange}/>
      <br/>
      <label htmlFor='year'>Year:</label>
      <input type='number' name='year' onChange={handleChange}/>
      <br/>
      <label htmlFor='make'>Make:</label>
      <input type='text' name='make' onChange={handleChange}/>
      <br/>
      <label htmlFor='model'>Model:</label>
      <input type='text' name='model' onChange={handleChange}/>
      <br/>
      <label htmlFor='class'>Class:</label>
      <input type='text' name='class' onChange={handleChange}/>
      <br/>
      <label htmlFor='price'>Price:</label>
      <input type='text' name='price' onChange={handleChange}/>
      <br/>
      <input type="submit"/>
    </form>

  </details>
  )

}

export default Add