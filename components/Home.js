import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>Home Page</h1>
      </section>
    </>
  );
}
export default Home;
