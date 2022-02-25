import React, { useState } from 'react';

export default function PizzaForm(props) {
    const {
      values,
      submit,
      change,
      disabled,
      errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
       
        const { name, value, checked, type } = evt.target;
        const trueValue = type === 'checkbox' ? checked : value;
       
        change(name, trueValue);
      }
      return (
        <form className='pizza-form' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>Add a Pie</h2>
    
            {/* 🔥 DISABLE THE BUTTON */}
            <button>submit</button>
    
            <div className='errors'>
              {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              <div>{errors.name}</div>
              <div>{errors.email}</div>
              <div>{errors.size}</div>
              <div>{errors.civil}</div>
            </div>
          </div>
    
          <div className='form-group inputs'>
            <h4>General information</h4>
    
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            <label>name&nbsp;
              <input
                value={values.name}
                onChange={onChange}
                name='name'
                type='text'
              />
            </label>
    
            <label>Email
              <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='text'
                placeholder='Enter an email!'
              />
            </label>
    
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            <label>Size
              <select
                onChange={onChange}
                value={values.size}
                name='size'
              >
                <option value=''>- Select an option -</option>
                <option value='small'>Small</option>
                <option value='medium'>Alumni</option>
                <option value='large'>Large</option>
              </select>
            </label>
    
            {/* ////////// RADIO BUTTONS ////////// */}
            {/* ////////// RADIO BUTTONS ////////// */}
            {/* ////////// RADIO BUTTONS ////////// */}
            <label>Traditional
              <input
                type="radio"
                name="civil"
                value="traditional"
                onChange={onChange}
                checked={values.civil === "traditional"}
              />
            </label>
    
            <label>No Gluten
              <input
                type="radio"
                name="civil"
                value="nogluten"
                onChange={onChange}
                checked={values.civil === "nogluten"}
              />
            </label>
          </div>
    
          <div className='form-group checkboxes'>
            <h4>Toppings</h4>
    
            {/* ////////// CHECKBOXES ////////// */}
            {/* ////////// CHECKBOXES ////////// */}
            {/* ////////// CHECKBOXES ////////// */}
            <label>Pepperoni
              <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
              />
            </label>
    
            <label>Sausage
              <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
              />
            </label>
    
            <label>Bacon
              <input
                type="checkbox"
                name="bacon"
                checked={values.bacon}
                onChange={onChange}
              />
            </label>
            <label>Olives
              <input
                type="checkbox"
                name="olives"
                checked={values.olives}
                onChange={onChange}
              />
            </label>
            <label>Onions
              <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
              />
            </label>
            <label>Peppers
              <input
                type="checkbox"
                name="peppers"
                checked={values.peppers}
                onChange={onChange}
              />
            </label>
          </div>
        </form>
      )
}