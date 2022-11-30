import React from 'react';

function Card(props) {
  const { name, pic, description, getPoki } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-40">
        <img src={pic} alt="Pokemon" className="h-full w-90" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-transform: capitalize">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={getPoki}>
            New Pokemon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
