import React, { useReducer, useState } from 'react'

// Reducer function that will contain the different cases
function reducerFunc (state, action) {
  switch (action.type) {
    case 'populate_modal': 
      return [...state, action.payload]; 
    default:
      return state;
  }
  
}

// initial state
const initialState = { 
  title: "Shoes", 
  description: "This brand has a lot of promotion", 
  brand: "Adidas", 
  link:"www.adidas.com", 
  tags: ["Promo", "BlackFriday"]
}

// My functional component to be rendered
function ReducerTestPage() {
  const [formState, dispatch] = useReducer(reducerFunc, initialState)
  const [formData, setFormData] = useState({title: "", description: "", brand: "", link: "", tags: ""})
  
  // function handling the change in state
  function handleBtnClick() {
    dispatch({
      type: 'populate_modal',
      payload: formData
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onsubmit={handleBtnClick()}> 
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value={formState.name} onChange={handleChange}/>

        <label for="descr">Description:</label>
        <input type="text" id="descr" name="descr" value={formState.description} onChange={handleChange}/>

        <label for="brand">brand:</label>
        <input type="text" id="brand" name="brand" value={formState.brand} onChange={handleChange}/>

        <label for="link">link:</label>
        <input type="text" id="link" name="link" value={formState.link} onChange={handleChange}/>

        <label for="tags">tags:</label>
        <input type="text" id="tags" name="tags" value={formState.tags} onChange={handleChange}/>

        <input type="submit" value="Submit"/>
      </form>

      <fieldset>
        <h3>Are you sure you want to add the following:</h3>
        <ul>
          {formState.map((data, index) => (
            <div>
              <li key={index}>{data.title}</li>
              <li key={index}>{data.description}</li>
              <li key={index}>{data.brand}</li>
              <li key={index}>{data.link}</li>
            </div>
          ))}
        </ul>
      </fieldset>
    </div>
  )
}

export default ReducerTestPage

