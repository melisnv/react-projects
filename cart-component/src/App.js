import logo from './logo.svg';
import { useGlobalContext } from './context';

import CartContainer from './CartContainer';
import Navbar from './Navbar';

function App() {
  /*if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }*/

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
