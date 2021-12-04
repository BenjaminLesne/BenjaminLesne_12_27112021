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
