import { useNavigate } from 'react-router-dom';

const Person = ({
  image,
  name,
  department,
  salary,
  performanceRating,
  projectsCompleted,
  trainingHours,
  unapprovedLeave,
  absences,
  training,
}) => {
  const navigate = useNavigate();

  const handlePerformanceClick = () => {
    navigate('/performance', {
      state: {
        name,
        department,
        performanceRating,
        projectsCompleted,
        trainingHours,
        unapprovedLeave,
        absences,
        training,
      },
    });
  };

  return (
    <div className="employee-container">
      <article className="person">
        <div className="row employees-row">
          <div className="column">
            <img src={image} alt={name} className="img" />
          </div>
          <div className="column">
            <h4>{name}</h4>
            <h5>{department}</h5>
            <p>{salary}€</p>
          </div>
          <div className="column">
            <button
              type="button"
              className="performance-btn"
              onClick={handlePerformanceClick}
            >
              Performance
            </button>
          </div>
        </div>
        <hr className="seperation-line"></hr>
      </article>
    </div>
  );
};

export default Person;
