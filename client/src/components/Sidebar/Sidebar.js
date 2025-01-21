import React from 'react'

function Sidebar() {
  return (
    
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* <li><a href='./'>Sidebar Item 1</a></li>
          <li><a href='./'>Sidebar Item 2</a></li> */}
          <form method="post">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Link</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Tag</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
          </form>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar