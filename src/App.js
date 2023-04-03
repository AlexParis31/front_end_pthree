import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Car from './component/Cars'
import Add from './component/Add'
import Edit from './component/Edit'

const App = () => {

  const [cars, setCars] = useState([])
  
  

  const getCars = () => {
    axios.get('http://localhost:3000/cars')
    .then((response) => setCars(response.data), (err) => console.log(err))
  }

 

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/cars/', data)
    .then((response) => {
       console.log(response)
       let newCars = [...cars, response.data]
       setCars(newCars)
    })
 }


 const handleDelete = (deletedCar) => {
  axios.delete('http://localhost:3000/cars/' + deletedCar._id)
  .then((response) => {
   let newCars = cars.filter((car) => {
      return car._id !== deletedCar._id
   })
     
   setCars(newCars)
  })
}



 
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/cars/' + data._id, data)
    .then((response) => {
      let newCars = cars.map((car) => {
        return car._id !== data._id ? car : data
      })
      setCars(newCars)
    })
  }

  useEffect(() => {
    getCars();
  }, [])
  
  return (
  <>
    <h1 className="title">Cars</h1> 

   
    <div className="add">
     <Add handleCreate={handleCreate}/></div>
       
     
    {cars.map((car) => {
      return (
        
        <div className="container">
          <Car cars={car}/>
          <div className="edit"><Edit cars={car} handleEdit={handleEdit} /> 
          <button className="delete" onClick={()=>{handleDelete(car)}}>DELETE</button></div>
         
        </div>
      )
    })}
  </>
  )
}


export default App


