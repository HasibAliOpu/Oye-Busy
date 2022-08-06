import React from "react";
import Review from "../Review/Review";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      reviews:
        "Awesome services by oyebusy. Oyebusy providing very good services to it's customers. i am also using its services from a long time. They nover have me a chance to dissatisfaction.",
      customer: "Vishal",
    },
    {
      id: 2,
      reviews:
        "Awesome services provided by OyeBusy. I am using it for services from a lot of time and always satisfied with its services. Thanks OyeBusy. ",
      customer: "Tanmay Kumar",
    },
    {
      id: 3,
      reviews:
        "I had booked them for a cleaning. They came yesterday to perform the service and it is fair...",
      customer: "Ranjeet Sharma",
    },
    {
      id: 4,
      reviews:
        "This app is ver easy to use. It is a user friendly app  for all our needs starting from repairing a fuse to getting our houses cleaned. Al the services were one touch away.",
      customer: "Sonia Singh",
    },
  ];
  return (
    <div className="mb-10 mt-20">
      <h1 className="text-2xl lg:text-4xl font-semibold text-[#025B5D] text-center">
        What our customers say
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-10 mt-16">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
