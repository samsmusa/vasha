import React from "react";

const SpecialReservation = () => {
  return (
    <div className="container mx-auto m-12 shadow-lg">
      <div class="hero  bg-base-200  rounded-lg">
        <div class="hero-content grid grid-cols-1 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1662100570937-041cce268a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialReservation;
