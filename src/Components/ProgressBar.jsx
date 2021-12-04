import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * return User progress bar component
 * @module ProgressBar
 *
 * @param {number} score
 *
 */

const ProgressBar = ({ score }) => {
  /**
   *
   * Data here allow the progress bar to go from 0 to 100%, to make this behaviour I need at least two data, to do so I use the score and its opposit (1 - score). We have now the score pie in red (active one) and the second one unactive in white.
   *
   * @constant
   * @type {Array}
   */
  const data = [
    {
      value: score,
    },
    {
      value: 1 - score,
    },
  ];

  /**
   * Create a custom active shape element for the progress bar pie, for more information check Recharts doc {@link https://recharts.org/en-US/examples/CustomActiveShapePieChart}
   * @function renderActiveShape
   *
   */

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      payload,
    } = props;
    const cos = Math.cos(-RADIAN * midAngle);
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={0}
          fontSize="26px"
          textAnchor="middle"
          fill={"#282D30"}
        >
          {payload.value * 100}%
        </text>
        <text
          x={cx}
          y={cy}
          dy={20}
          fontSize="16px"
          textAnchor="middle"
          fill={"#74798C"}
        >
          de votre
        </text>
        <text
          x={cx}
          y={cy}
          dy={40}
          fontSize="16px"
          textAnchor="middle"
          fill={"#74798C"}
        >
          objectif
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={"#FF0000"}
          cornerRadius={10}
        />
        <text
          x={cx + -50}
          y={cy + -90}
          textAnchor={textAnchor}
          fill="#333"
          fontSize="15px"
          fontWeight="bold"
        >
          Score
        </text>
      </g>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={[{ value: 100 }, { value: 0 }]}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="white"
        />
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={90}
          fill="transparent"
          activeShape={renderActiveShape}
          activeIndex={0}
          startAngle={90}
          endAngle={450}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

ProgressBar.propTypes = {
  score: PropTypes.number,
};

export default ProgressBar;
