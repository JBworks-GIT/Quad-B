import { useState } from "react";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <img src="../assets/images/HODLINFO_title" alt="newefe " srcset="" />
        <div className="btns">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            class="header-button dropdown-toggle btn btn-secondary"
          >
            INR
          </button>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            class="header-button dropdown-toggle btn btn-secondary"
          >
            BTC
          </button>
          <button
            type="button"
            class="header-button btn btn-secondary"
          >
            <a
              target="_blank"
              href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"
              rel="noopener noreferrer"
            >
              BUY BTC
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default App;
