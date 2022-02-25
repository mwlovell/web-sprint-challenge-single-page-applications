import React from 'react';
import { Link } from 'react-router-dom';




export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props
  /**
   * const values = props.values;
   * const submit = props.submit;
   * const change = props.change
   */

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form id='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a pie</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <Link to="/pizza"> <button id='order-pizza' disabled={disabled}>submit order</button></Link>

        
   

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.size}</div>
          <div>{errors.crust}</div>
          <div>{errors.instructions}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label id='name-input'>Name&nbsp;
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
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label id='size-dropdown'>Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Traditional
          <input
            type='radio'
            name='crust'
            value='traditional'
            onChange={onChange}
            checked={values.crust === 'traditional'}
          />
        </label>

        <label>Gluten Free
          <input
            type='radio'
            name='crust'
            value='glutenfree'
            onChange={onChange}
            checked={values.crust === 'glutenfree'}
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
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Sausage
          <input
            type='checkbox'
            name='sausage'
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>Bacon
          <input
            type='checkbox'
            name='bacon'
            checked={values.bacon}
            onChange={onChange}
          />
        </label>
        <label>Olives
          <input
            type='checkbox'
            name='olives'
            checked={values.olives}
            onChange={onChange}
          />
        </label>
        <label>Onions
          <input
            type='checkbox'
            name='onions'
            checked={values.onions}
            onChange={onChange}
          />
        </label>
        <label>Peppers
          <input
            type='checkbox'
            name='peppers'
            checked={values.peppers}
            onChange={onChange}
          />
        </label>
        <label id='special-text'>Instructions
              <input
                value={values.instructions}
                onChange={onChange}
                name='instructions'
                type='text'
                placeholder='special text'
              />
            </label>
        
      </div>
    </form>
  )
}

