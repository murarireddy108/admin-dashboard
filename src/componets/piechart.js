
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Direct', 'Social', ' Referral'],
  datasets: [
    {
      label: '# of Votes',
      data: [55, 30, 15],
      backgroundColor: [
        'rgb(78,115,223)',
        'rgb(28,200,138)',
        'rgb(54,185,204)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Pie() {
  return <Doughnut data={data} />;
}
