import React from "react";
import { Link } from "react-router-dom";

const Nomatch = () => {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <span className="not-found-label">
          ZANNY BEAUTY PALACE
        </span>

        <div className="error-number">
          404
        </div>

        <h1>
          Page Not Found
        </h1>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved to another location.
        </p>

        <div className="not-found-actions">

          <Link
            to="/"
            className="not-found-home-btn"
          >
            <i className="fa-solid fa-house"></i>
            Back to Home
          </Link>

          <Link
            to="/produce"
            className="not-found-shop-btn"
          >
            <i className="fa-solid fa-bag-shopping"></i>
            Explore Products
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Nomatch;