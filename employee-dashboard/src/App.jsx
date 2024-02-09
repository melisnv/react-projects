// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './data';
import List from './List';
import Performance from './Performance';

function App() {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  const handleFetch = () => {
    setPeople(data);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section className="container">
                <h1 className="main-title">Employee Dashboard</h1>
                <List people={people} />

                <div className="row">
                  <div className="column">
                    <button className="btn" type="button" onClick={handleClear}>
                      Clear
                    </button>
                    <button className="btn" type="button" onClick={handleFetch}>
                      Fetch
                    </button>
                  </div>
                </div>
              </section>
            </main>
          }
        />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;
