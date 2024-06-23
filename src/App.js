import React, { useEffect, useRef } from 'react';
import './App.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function App() {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    myChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChartRef.current.destroy();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computational Pluralism</h1>
      </header>
      <div className="App-body">
        <div className="App-left-column">
          <h2>Moral Theories</h2>
          <ul>
            <li>Utilitarianism</li>
            <li>Deontology</li>
            <li>Virtue Ethics</li>
            <li>Contractarianism</li>
            <li>Care Ethics</li>
          </ul>
        </div>
        <div className="App-right-pane">
          <form className="App-form">
            <input type="text" placeholder="Idea" />
            <input type="text" placeholder="Conviction" />
            <input type="text" placeholder="Commentary" />
          </form>
          <div className="App-chart">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
