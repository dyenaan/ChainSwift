import React, { useState } from 'react';
import "./Card.css";

const Card = ({ firstName, lastName, major, ucid, address, selectedImage }) => {
  const [flipped, setFlipped] = useState(true);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };
  

  return (
    <>
      {flipped ? (
        <div onClick={handleCardClick} className='card--overlay'>
          <div>
            <img
              src="/images/U/University_of_Calgary-logo-91B77758F3-seeklogo.com.png"
              alt="University of Calgary Logo PNG Vector"
              title="University of Calgary Logo PNG Vector"
              className='logo'
            />
          </div>

          <div className='card--view'>
            <div className='topRightDiv'>
              <img src={selectedImage} alt="" />
            </div>

            <h2 className='name'>{` ${firstName} ${lastName}`}</h2>

            <div className='info'>
              <p className='details'>{ucid}</p>
              <p className='details'>{major}</p>
            </div>

            {/* You may need to add content or remove the empty div based on your requirements */}
            <div></div>
          </div>
        </div>
      ) : (
        <div>

          <p className='text1'>Scan the QR code to Access your student Records</p>
          <div onClick={handleCardClick} className='card--overlay1'>
            <p className='text'>Access your stored records from the Blockchain</p>

            <img  src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg' alt=''/>


          </div>
        </div>
      )}
    </>
  );
};

export default Card;
