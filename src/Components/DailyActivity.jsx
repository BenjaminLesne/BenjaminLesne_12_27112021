import "../styles/DailyActivity.css";
import "../styles/DailyActivityCustomTooltip.css";
import PropTypes from "prop-types";
import BarChartShape from "./BarChartShape";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * User daily activity chart, it shows the user weight and calories burnt over the last 7 days
 * @module DailyActivity
 *
 * @param {object} USER_ACTIVITY
 * @property {Array.<{calories: number, kilogram: number, day: number}>} USER_ACTIVITY.sessions - array storing user calories burnt, weight and the day related to those data for the last 7 days. So day = 1 mean the first day of the last 7 days.
 * @property {number} USER_ACTIVITY.userId
 */

const DailyActivity = ({ USER_ACTIVITY }) => {
  /**
   *
   * Filter USER_ACTIVITY.sessions array with given string as param
   * @function
   *
   * @param {string} valueFilter
   * @return {Array}
   */
  const filterDataBase = (valueToFilter) => {
    const filteredContent = [];

    for (let index = 0; index < USER_ACTIVITY.sessions.length; index++) {
      filteredContent.push(USER_ACTIVITY.sessions[index][valueToFilter]);
    }
    return filteredContent;
  };

  const dailyKilogram = filterDataBase("kilogram");
  const dailyCalories = filterDataBase("calories");
  /**
   * Create a custom tooltip element for the daily activity chart, for more information check Recharts doc {@link https://recharts.org/en-US/examples/CustomContentOfTooltip}
   * @function CustomTooltip
   *
   */

  const CustomTooltip = (props) => {
    const { payload, active } = props;
    if (active) {
      return (
        <div className="DailyActivity__CustomTooltip">
          <p className="DailyActivity__CustomTooltip-item">
            {payload[0].value}kg
          </p>
          <p className="DailyActivity__CustomTooltip-item">
            {payload[1].value}Kcal
          </p>
        </div>
      );
    }

    return null;
  };

  //render
  return (
    <div className="DailyActivity">
      <header className="DailyActivity__header">
        <h3 className="DailyActivity__title">Activité quotidienne</h3>
        <ul className="DailyActivity__legend">
          <li className="DailyActivity__item-legend">Poids (kg)</li>
          <li className="DailyActivity__item-legend DailyActivity__item-legend--red">
            Calories brûlées(kCal)
          </li>
        </ul>
      </header>
      <div className="DailyActivity__graph-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={USER_ACTIVITY.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={8}
            barSize={7}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              axisLine={false}
              tickMargin={15}
              tickLine={false}
              tiks={[1, 2, 3, 4, 5, 6, 7]}
            />
            <YAxis
              // yAxisId="kilogramAxis"
              interval={"preserveEnd"}
              orientation="right"
              axisLine={false}
              tickMargin={15}
              tickLine={false}
              tickCount={4}
              domain={[
                () => Math.round(Math.min(...dailyKilogram) - 1),
                () => Math.round(Math.max(...dailyKilogram) + 1),
              ]}
            />
            <YAxis
              yAxisId="caloriesAxis"
              hide={true}
              domain={[
                () => Math.round(Math.min(...dailyCalories) * 0.8),
                () => Math.round(Math.max(...dailyCalories) * 1.1),
              ]}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              // yAxisId="kilogramAxis"
              dataKey="kilogram"
              fill="#282D30"
              shape={<BarChartShape />}
            />
            <Bar
              yAxisId="caloriesAxis"
              dataKey="calories"
              fill="#E60000"
              shape={<BarChartShape />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

DailyActivity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      kilogram: PropTypes.number,
      day: PropTypes.string,
    })
  ),
  userId: PropTypes.number,
};

export default DailyActivity;
