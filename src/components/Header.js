import React from 'react';

const Header = props => {
  console.log("Header props", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.car.image} alt={props.car.car.name} />
      </figure>
      <h2>{props.car.car.name}</h2>
      <p>Amount: ${props.car.car.price + props.car.additionalPrice}</p>
    </>
  );
};

export default Header;
