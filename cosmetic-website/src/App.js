import Pages from './pages/Pages';

const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function App() {
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
