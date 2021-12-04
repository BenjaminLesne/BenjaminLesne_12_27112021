import "../styles/CharacteristicsChart.css";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * User characteristics chart - basically show how "strong" is the user in different field (cardio, strength etc)
 * @module CharacteristicsChart
 *
 * @param {object} USER_PERFORMANCE
 * @property {Array.<{kind: number, value: number}>} USER_PERFORMANCE.data - array storing user performance objects related to each field. i.e. an object {kind: 1, value: 10} means: cardio score = 10
 * @property {number} USER_PERFORMANCE.kind - each number equal to a field e.g. 1 = "cardio"
 * @property {number} USER_PERFORMANCE.userId
 */

const CharacteristicsChart = ({ USER_PERFORMANCE }) => {
  /**
   * @function handleLabels
   *
   * @param {object} data
   * @param {number} data.kind
   *
   * @returns {string}
   */
  const handleLabels = (data) => {
    switch (data.kind) {
      case 1:
        return "Cardio";

      case 2:
        return "Energie";

      case 3:
        return "Endurance";

      case 4:
        return "Force";

      case 5:
        return "Vitesse";

      case 6:
        return "Intensité";

      default:
        console.log("data.kind unknown =/= [0-6]");
        break;
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={USER_PERFORMANCE.data}
        outerRadius={"60%"}
        margin={{ top: 20, bottom: 20, right: 20, left: 20 }}
      >
        <PolarGrid />
        <PolarAngleAxis
          stroke="#fff"
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
          dataKey={(data) => handleLabels(data)}
        />
        <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

CharacteristicsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number,
      value: PropTypes.number,
    })
  ),
  kind: PropTypes.shape({ 1: PropTypes.string }),
  userId: PropTypes.number,
};

export default CharacteristicsChart;
