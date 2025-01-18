import React from 'react'

function Item(title, description, link, tag) {
  return (
    <div>
      <div>
        <button>Edit</button>
        <img src="" alt=""/>
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <ul>
        {/* array.forEach(element => {
          <li>{tag}</li>
        }); */}
      </ul>
      <a href={link}>Link</a>
    </div>
  )
}

export default Item