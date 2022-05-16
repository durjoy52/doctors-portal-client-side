import React from 'react';

const ReviewCard = ({review}) => {
    const {img,name,review_text, location} =review
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{review_text}</p>
    <div className='flex items-center my-6'>
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
    <img src={img} alt=''/>
  </div>
</div>
        <div>
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        </div>
    </div>
  </div>
</div>
    );
};

export default ReviewCard;