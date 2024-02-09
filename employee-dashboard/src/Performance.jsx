import { useLocation } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';


const Performance = () => {
  const { state } = useLocation();
   const {
     name,
     department,
     performanceRating,
     projectsCompleted,
     trainingHours,
   } = state;

   const data = [
     { name: 'Geeksforgeeks', students: 400 },
     { name: 'Technical scripter', students: 700 },
     { name: 'Geek-i-knack', students: 200 },
     { name: 'Geek-o-mania', students: 1000 },
   ];

  return (
    <main>
      <section className="container">
        <div>
          <h2 className="performance-title">{name}</h2>
          <h4>{department}</h4>
          <p>{performanceRating}</p>
          <p>{projectsCompleted}</p>
          <p>{trainingHours}</p>
        </div>

        <div>
          <progress value={75} max={100} />
        </div>

        <div>
          <PieChart width={600} height={700}>
            <Pie
              data={data}
              dataKey="students"
              outerRadius={250}
              fill="lightblue"
            />
          </PieChart>
        </div>
      </section>
    </main>
  );
};

export default Performance;
