/**
 * Get user data
 * @module getUserData
 * @param {number} userId
 * @param {string} option - available string choices : "performance","activity", "average-session" or no option at all.
 * @return {object} - return data from API. No option return  USER_MAIN_DATA. "perfomance" as option return USER_PERFORMANCE, "activity" as option return USER_ACTIVITY, "average-sessions" as option return USER_AVERAGE_SESSIONS
 *
 */

const getUserData = async (userId, option) => {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(
      `${url}/user/${userId}${option ? `/${option}` : ""}`
    );
    const json = await response.json();

    return json.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default getUserData;
