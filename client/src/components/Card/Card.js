import React from 'react'

export default function Card({cardInfo, key}) {
  const { title, description, brand, link, tags } = cardInfo;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p>{description}</p>
        
        <div className="card-actions justify-end">
          <a href={link} className="badge badge-outline">Check it out</a>
        </div>
        <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
