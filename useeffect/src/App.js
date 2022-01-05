import './App.css';
import UseEffectBasics from './useeffect-basics';
import UseEffectCleanUp from './useeffect-cleanup';
import UseEffectFetchData from './github-users-fetchingdata';
import UseEffectConditionalRendering from './useeffect-conditional-rendering';

function App() {
  return (
    <div className="container">
      <UseEffectFetchData />
    </div>
  );
}

export default App;
