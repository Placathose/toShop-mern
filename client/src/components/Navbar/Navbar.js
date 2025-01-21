import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="./" className="btn btn-ghost text-xl">2Shop</a>
      </div>
      <div className="flex-none">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm btn-primary">Add Item</label>
      </div>
    </div>
  )
}

export default Navbar