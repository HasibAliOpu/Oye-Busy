import React from "react";
import coma from "../../images/icon/coma.png";
const Review = (review) => {
  const { customer, reviews } = review.review;
  return (
    <div class="card shadow-xl border-2">
      <div class="card-body">
        <div class="card-actions justify-start">
          <img src={coma} alt="" />
        </div>
        <p>{reviews}</p>
        <h1 className="text-xl font-semibold pt-5">{customer}</h1>
      </div>
    </div>
  );
};

export default Review;
