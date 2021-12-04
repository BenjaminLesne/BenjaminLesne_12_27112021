import "../styles/Dashboard.css";
import NutrimentsList from "./NutrimentsList";
import DailyActivity from "./DailyActivity";
import ProgressBar from "./ProgressBar";
import CharacteristicsChart from "./CharacteristicsChart";
import AverageSessionTimeChart from "./AverageSessionTimeChart";
import PropTypes from "prop-types";

/**
 * User dashboard store all the data (performance, activity, average session, main data) and distribute them to chart components
 * @module Dashboard
 *
 * @param {object} USER_MAIN_DATA
 *
 * @param {{calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number}} USER_MAIN_DATA.keyData - object storing user diet data (calories burnt, carbohydrate, lipids, proteins intake)
 * @param {number} USER_MAIN_DATA.keyData.calorieCount
 * @param {number} USER_MAIN_DATA.keyData.carbohydrateCount
 * @param {number} USER_MAIN_DATA.keyData.lipidCount
 * @param {number} USER_MAIN_DATA.keyData.proteinCount
 *
 * @param {{age: number, firstname: string, lastname: string}} USER_MAIN_DATA.userInfos
 * @param {number} USER_MAIN_DATA.userInfos.age
 * @param {string} USER_MAIN_DATA.userInfos.firstname
 * @param {string} USER_MAIN_DATA.userInfos.lastname
 *
 * @param {number} USER_MAIN_DATA.id - user id
 * @param {number} [USER_MAIN_DATA.todayScore] - user progress ratio e.g. 0.13 (out of 1). If this property is missing, we use USER_MAIN_DATA.score. At least one of them should be available.
 * @param {number} [USER_MAIN_DATA.score] - user progress ratio e.g. 0.30 (out of 1). If this property is missing, we use USER_MAIN_DATA.todayScore. At least one of them should be available.
 *
 *
 * @param {object} USER_ACTIVITY
 * See {@link module:DailyActivity}
 *
 * @param {object} USER_PERFORMANCE
 * See {@link module:CharacteristicsChart}
 *
 * @param {object} USER_AVERAGE_SESSIONS
 * See {@link module:AverageSessionTimeChart}
 *
 *
 */

const Dashboard = ({
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
}) => {
  return (
    <div className="Dashboard">
      <div className="Dashboard__graphs">
        <section className="Dashboard__top-graph">
          <DailyActivity USER_ACTIVITY={USER_ACTIVITY} />
        </section>
        <section className="Dashboard__bottom-graphs">
          <div className="Dashboard__bottom-graph">
            <AverageSessionTimeChart
              USER_AVERAGE_SESSIONS={USER_AVERAGE_SESSIONS}
            />
          </div>
          <div className="Dashboard__bottom-graph">
            <CharacteristicsChart USER_PERFORMANCE={USER_PERFORMANCE} />
          </div>
          <div className="Dashboard__bottom-graph">
            <ProgressBar
              score={
                USER_MAIN_DATA.todayScore
                  ? USER_MAIN_DATA.todayScore
                  : USER_MAIN_DATA.score
              }
            />
          </div>
        </section>
      </div>
      <aside className="Dashboard__aside">
        <NutrimentsList data={USER_MAIN_DATA.keyData} />
      </aside>
    </div>
  );
};

Dashboard.propTypes = {
  USER_ACTIVITY: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        calories: PropTypes.number,
        kilogram: PropTypes.number,
        day: PropTypes.string,
      })
    ),
    userId: PropTypes.number,
  }),
  USER_PERFORMANCE: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number,
        value: PropTypes.number,
      })
    ),
    kind: PropTypes.shape({ 1: PropTypes.string }),
    userId: PropTypes.number,
  }),
  USER_AVERAGE_SESSIONS: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      })
    ),
  }),
  USER_MAIN_DATA: PropTypes.shape({
    id: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
      proteinCount: PropTypes.number,
    }),
    todayScore: PropTypes.number,
    score: PropTypes.number,
    userInfos: PropTypes.shape({
      age: PropTypes.number,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
  }),
};

export default Dashboard;
