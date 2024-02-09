import { useLocation } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';


const Performance = () => {
  const { state } = useLocation();
   const {
     name,
     department,
     performanceRating,
     projectsCompleted,
     trainingHours,
     training,
   } = state;

   const pieChartData = training.map((item,index)=>({
    name: item.name,
    value: item.hours
  }))

  const COLORS = ['#3D2B1F', '#B8AD9E', '#410200', '#8D7D77', '#C3B091'];

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
        <br></br>
        <br></br>

        <div>
          {training.map((item, index) => (
            <p key={index}>
              {item.name}: {item.hours} hours
            </p>
          ))}
        </div>

        <br></br>
        <br></br>

        <div>
          <progress value={performanceRating} max={10} />
        </div>

        <div className="piechart-container">
          <PieChart width={600} height={700}>
            <Pie
              data={pieChartData}
              dataKey="value"
              isAnimationActive={true}
              fill="lightblue"
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              outerRadius={100}
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </section>
    </main>
  );
};

export default Performance;
