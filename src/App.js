import React, { useState, useEffect } from 'react'
import Pizza from './Components/pizza'
// import { Link } from 'react-router-dom';
import PizzaForm from './Components/pizzaForm'

// 🔥 STEP 1- CHECK THE ENDPOINTS IN THE README
// 🔥 STEP 2- FLESH OUT FriendForm.js
// 🔥 STEP 3- FLESH THE SCHEMA IN ITS OWN FILE
// 🔥 STEP 4- IMPORT THE SCHEMA, AXIOS AND YUP
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';
import {  Route } from 'react-router-dom'
// import { Home } from './components/pizza'

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
  size: '',
  ///// CHECKBOXES /////
  instructions: '',

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
  size: '',
  instructions: '',
}

const initialPizzas = []
const initialDisabled = true


export default function App() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  
  const [pizzas, setPizzas] = useState(initialPizzas);        // array of friend objects
  
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  // //////////////// HELPERS ////////////////
  // const getPizzas = () => {
  //   // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
  //   //    helper to [GET] all friends from `http://buddies.com/api/friends`
  //   axios.get('https://reqres.in')
  //     .then(res => {
  //       console.log(res)
  //       setPizzas(res.data);
        
  //     }).catch(err => console.error(err))
  // }

  const PostNewPizza = newPizza => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      console.log(res.data)
      setPizzas([res.data, ...pizzas]);
      setFormValues(initialFormValues);
    }).catch(err => console.error(err))
    
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    
  }
  

  
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

 

  // !true => !false => true
  // !"blah" => !false => true
  // !null => !true => false
  // !"hiking" => !false => true
  // !!"hiking" => true

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size,
      crust: formValues.crust,
      instructions:formValues.instructions.trim(),
      toppings: ['pepperoni', 'sausage', 'bacon', 'olives', 'onions', 'peppers'].filter(toppings => formValues[toppings])
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    PostNewPizza(newPizza);
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  }
  // useEffect(() => {
  //   getPizzas()
  // }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  

 console.log(pizzas)

  return (
    <div className='container'>
      <header>
        <h1>Pizza App</h1> </header>
        
        
        <Route exact path="/"> 
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
</Route>
<Route exact path="/pizza">
<PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
</Route>

{/* <Route exact path="/pizza">
  <Pizza
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
  />
</Route> */}

        

      
        

      
      {
        
        pizzas.map((pizza) => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
    </div>
  )
}


