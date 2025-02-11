import { useReducer, useState } from 'react';

// Reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'submit_form': {
      // Update the state with the form data when the form is submitted
      return {
        ...state,
        title: action.formData.title,
        description: action.formData.description,
        brand: action.formData.brand,
        link: action.formData.link,
        tags: action.formData.tags,
        submitted: true // To track if the form has been submitted
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  title: '',
  description: '',
  brand: '',
  link: '',
  tags: '',
  submitted: false // To track if the form has been submitted
};

export default function ReducerTestPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({ ...initialState }); // Local state to hold form input values

  // Handle input changes
  function handleInputChange(e) {
    // Update the local form data state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Dispatch the submit_form action with the current form data
    dispatch({
      type: 'submit_form',
      formData: formData
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title} // Use local state for the input value
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description} // Use local state for the input value
          onChange={handleInputChange}
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand} // Use local state for the input value
          onChange={handleInputChange}
        />

        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link} // Use local state for the input value
          onChange={handleInputChange}
        />

        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags} // Use local state for the input value
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit" />
      </form>

      {/* Display the submitted data */}
      {state.submitted && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Title: {state.title}</p>
          <p>Description: {state.description}</p>
          <p>Brand: {state.brand}</p>
          <p>Link: {state.link}</p>
          <p>Tags: {state.tags}</p>
        </div>
      )}
    </>
  );
}