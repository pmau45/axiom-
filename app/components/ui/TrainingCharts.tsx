'use client';

import { Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  Filler,
  Tooltip,
  Legend,
  RadialLinearScale,
  type TooltipItem,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  Filler,
  Tooltip,
  Legend,
  RadialLinearScale
);

export function ProgressChart() {
  const data = {
    labels: ['Session 1', 'Session 2', 'Week 2', 'Week 4', 'Week 8', 'Ongoing'],
    datasets: [
      {
        label: 'Behavioral Reliability',
        data: [10, 40, 30, 60, 50, 90],
        borderColor: '#b45309',
        backgroundColor: 'rgba(180, 83, 9, 0.1)',
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#b45309',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'line'>) => {
            return 'Reliability/Focus: ' + context.parsed.y + '%';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 25 },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export function QuadrantChart() {
  const data = {
    labels: [
      ['Positive', 'Reinforcement'],
      ['Negative', 'Reinforcement'],
      ['Positive', 'Punishment'],
      ['Negative', 'Punishment'],
    ],
    datasets: [
      {
        label: 'Tool Usage %',
        data: [40, 25, 20, 15],
        backgroundColor: 'rgba(180, 83, 9, 0.2)',
        borderColor: '#b45309',
        pointBackgroundColor: '#b45309',
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(0,0,0,0.1)' },
        grid: { color: 'rgba(0,0,0,0.05)' },
        pointLabels: {
          font: { size: 12 },
          color: '#444',
        },
        ticks: { display: false, max: 50, min: 0 },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'radar'>) => {
            return 'Application Rate: ~' + context.parsed.r + '%';
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}
