import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map((point) => point.value);
  const totalMax = Math.max(...dataPointValue);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
