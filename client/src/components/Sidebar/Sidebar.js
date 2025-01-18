import React from 'react'

function Sidebar() {
  return (
    <div>
      <form method="post">
        <label for="item-title">Title</label>
        <input type="" name="item-title" id="title"/>

        <label for="item-decription">Description</label>
        <input type="" name="item-title" id="title"/>

        <label for="item-price">Price</label>
        <input type="" name="item-title]" id="title"/>

        <label for="item-link">Link</label>
        <input type="" name="item-link" id="title"/>
        
        <label for="item-tags">Tags</label>
        <input type="" name="item-tags" id="title"/>

        
      </form>
    </div>
  )
}
// title: String,
//     description: String,
//     brand: String,
//     price: Number,
//     link: String,
//     tags: [String],
//     selectedFile: String,
export default Sidebar