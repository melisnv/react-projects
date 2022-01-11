import React, { useState, useEffect } from 'react';
import data from './data';
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const { id, order, title, dates, duties, company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs__center">
        <div className="btn__container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job__btn ${index === value && 'active__btn'}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article key={id} className="job__info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job__date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job__desc">
                <FaAngleDoubleRight className="job__icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
