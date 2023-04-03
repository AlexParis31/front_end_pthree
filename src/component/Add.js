import {useState} from 'react'


const Add = (props) => {
    const [cars, setCars] = useState({name: '', conference: '', logo: '', rank: ''})
    const [hidden1, setHidden1] = useState("hidden");

     
   const handleChange = (event) => {
    setCars({...cars, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(cars)
 }



 return(
    <>
    <div className={hidden1}>
      <form onSubmit={handleSubmit}>
      
  <label htmlFor='image'>Image:</label>
  <input type='text' name='image' onChange={handleChange}/>
  <br/>
  <label htmlFor='year'>Year:</label>
  <input type='text' name='year' onChange={handleChange}/>
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
  <input type="submit"/>
</form>
</div>
    </>
   )
}

export default Add