import React, { useState, useEffect } from 'react'
import Pizza from './Components/pizza'
// import { Link } from 'react-router-dom';
import PizzaForm from './Components/pizzaForm'
// 🔥 STEP 1- CHECK THE ENDPOINTS IN THE README
// 🔥 STEP 2- FLESH OUT FriendForm.js
// 🔥 STEP 3- FLESH THE SCHEMA IN ITS OWN FILE
// 🔥 STEP 4- IMPORT THE SCHEMA, AXIOS AND YUP
import axios from 'axios';
// import * as yup from 'yup';
// import schema from '../validation/formSchema';

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  crust: '',
  ///// RADIO BUTTONS /////
  crust: '',
  ///// CHECKBOXES /////
 

  pepperoni: false,
  sausage: false,
  bacon: false,
  olives: false,
  onions: false,
  peppers: false,

}
const initialFormErrors = {
  name: '',
  email: '',
  crust: '',
  crust: '',
}
const initialPizzas = []
const initialDisabled = true


export default function App() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  const [pizzas, setPizzas] = useState(initialPizzas)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getPizzas = () => {
    // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://buddies.com/api/friends`
  }

  const postNewPizza = newFriend => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      crust: formValues.crust.trim(),
      crust: formValues.crust.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  }

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getPizzas()
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Pizza App</h1>
        {/* <Link to="/">Home</Link> */}
      </header>
      
        
       
      <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        pizzas.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
    </div>
  )
}


