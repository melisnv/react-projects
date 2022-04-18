import icon from './images/icon-star.svg';

function App() {
  return (
    <div className="container">
      <div className="icon">
        <span className="icon__background">
          <img src={icon} alt="star icon" className="icon__img" />
        </span>
      </div>
      <div className="information">
        <h3 className="information__title">How did we do?</h3>
        <p className="information__paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating">
        <span className="rating__background">
          <p className="rating__number">1</p>
        </span>
        <span className="rating__background">
          <p className="rating__number">2</p>
        </span>
        <span className="rating__background">
          <p className="rating__number">3</p>
        </span>
        <span className="rating__background">
          <p className="rating__number">4</p>
        </span>
        <span className="rating__background">
          <p className="rating__number">5</p>
        </span>
      </div>
    </div>
  );
}

export default App;
