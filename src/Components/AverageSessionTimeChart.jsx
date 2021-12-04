import "../styles/AverageSessionTimeChart.css";
import PropTypes from "prop-types";

import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

/**
 * User average session time chart
 * @module AverageSessionTimeChart
 *
 * @param {object} USER_AVERAGE_SESSIONS - user sessions object, it gives the userId and the sessions array
 * @property {number} USER_AVERAGE_SESSIONS.userId
 * @property {Array.<{day: number, sessionLength: number}>} USER_AVERAGE_SESSIONS.sessions - array of the last 7 sessions. A session is an object storing the day and the session length
 */

const AverageSessionTimeChart = ({ USER_AVERAGE_SESSIONS }) => {
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  /**
   * Create a custom tooltip element for the average session time chart, for more information check Recharts doc {@link https://recharts.org/en-US/examples/CustomContentOfTooltip}
   * @function CustomTooltip
   *
   */
  const CustomTooltip = (props) => {
    const { payload, active } = props;
    if (active) {
      document.querySelector(
        ".AverageSession__mask"
      ).style.width = `calc(100% - ${props.coordinate.x}px)`;
      return (
        <div className="AverageSession__CustomTooltip">
          <p className="AverageSession__CustomTooltip-item">
            {payload[0].payload.sessionLength} min
          </p>
        </div>
      );
    }
    document.querySelector(".AverageSession__mask").style.width = `0px`;
    return null;
  };

  //render
  return (
    <div className="AverageSession">
      <div className="AverageSession__mask"></div>
      <h3 className="AverageSession__title">Durée moyenne des sessions</h3>
      <ul className="AverageSession__labels">
        {labels.map((item, index) => (
          <li key={index} className="AverageSession__label">
            {item}
          </li>
        ))}
      </ul>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={100}
          data={USER_AVERAGE_SESSIONS.sessions}
          margin={{ top: 100, bottom: 50 }}
        >
          <Tooltip cursor={false} content={(data) => CustomTooltip(data)} />
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.106534)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#myGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: "white",
              strokeWidth: 10,
              stroke: "rgba(255,255,255,0.198345)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionTimeChart.propTypes = {
  userId: PropTypes.number,
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ),
};

export default AverageSessionTimeChart;
