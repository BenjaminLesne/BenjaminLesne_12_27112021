import { useState, useEffect } from "react";

import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import getUserData from "../Service/getUserData.js";

import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    if (userId !== 0) {
      const promises = [];

      promises.push(getUserData(userId));
      promises.push(getUserData(userId, "activity"));
      promises.push(getUserData(userId, "performance"));
      promises.push(getUserData(userId, "average-sessions"));

      Promise.all(promises)
        .then((promisesArray) => {
          const newData = {
            USER_MAIN_DATA: promisesArray[0],
            USER_ACTIVITY: promisesArray[1],
            USER_PERFORMANCE: promisesArray[2],
            USER_AVERAGE_SESSIONS: promisesArray[3],
          };

          setData(newData);
        })
        .then(() => {
          setIsLoaded(true);
        });
    }
  }, [userId]);

  if (isLoaded) {
    return (
      <div className="ProfilePage">
        <main className="ProfilePage__main">
          <div className="ProfilePage__content">
            <Header userName={data.USER_MAIN_DATA.userInfos.firstName} />
            <Dashboard
              USER_ACTIVITY={data.USER_ACTIVITY}
              USER_PERFORMANCE={data.USER_PERFORMANCE}
              USER_MAIN_DATA={data.USER_MAIN_DATA}
              USER_AVERAGE_SESSIONS={data.USER_AVERAGE_SESSIONS}
            />
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <ul
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li className="getToUserProfile" onClick={() => setUserId(12)}>
          User 12
        </li>
        <li className="getToUserProfile" onClick={() => setUserId(18)}>
          User 18
        </li>
      </ul>
    );
  }
};

export default ProfilePage;
