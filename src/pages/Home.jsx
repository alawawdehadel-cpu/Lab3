import React from "react";

function Home() {
  return (
    <div className="home-page">

      <div className="home-card">

        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          className="home-image"
        />

        <h1>Welcome to Book Explorer!</h1>

        <p>
          Browse books and view their details using Open Library API.
        </p>

      </div>

    </div>
  );
}

export default Home;