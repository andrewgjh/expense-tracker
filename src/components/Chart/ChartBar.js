import "./ChartBar.css";
const ChartBar = props => {
  const { label, value, maxValue } = props;

  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label" style={{ height: barFillHeight }}>
        {label}
      </div>
    </div>
  );
};
export default ChartBar;
