import { useState } from "react";

import Brief from "./Brief/Brief";

import "./App.css";

function App() {
  const bernard = {
    height: "5'10",
    weight: "185 lbs",
    age: "31",
    from: "Santa Ana",
    favoriteTeam: "la lakers",
    snacks: "ice pop prime, bananas",
  };

  const [showBernard, setShowBernard] = useState(false);

  function handleClick(e) {
    e.preventDefault();

    setShowBernard((prev) => !prev);
  }

  return (
    <main className="App">
      <Brief />
      <section className="Container">
        <header className="Header">
          <h1>Rim Reapers</h1>
          <p>reaping rims on and off the court</p>
        </header>
        <section className="Player" onClick={handleClick}>
          Bernard
          {showBernard && (
            <>
              <section className="About">
                <section className="Fave">
                  <h6>Favorite Team</h6>
                  <p>{bernard.favoriteTeam}</p>
                </section>
                <section className="Fave">
                  <h6>Favorite Snacks</h6>
                  <p>{bernard.snacks}</p>
                </section>
              </section>
              <section className="Stats">
                <h6>Most Recent Stats</h6>
                <table>
                  <tr>
                    <th>min</th>
                    <th>pts</th>
                    <th>fg</th>
                    <th>3pt</th>
                    <th>reb</th>
                    <th>ast</th>
                    <th>stl</th>
                    <th>blk</th>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>39</td>
                    <td>15-24</td>
                    <td>6-11</td>
                    <td>7</td>
                    <td>6</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </table>
              </section>
            </>
          )}
        </section>
        <section className="Player">Bryan</section>
        <section className="Player">Mike</section>
      </section>
    </main>
  );
}

export default App;
