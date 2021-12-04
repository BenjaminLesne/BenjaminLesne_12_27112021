import "./App.css";
import ProfilePage from "./Pages/ProfilePage";
import VerticalLayout from "./Components/VerticalLayout";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <VerticalLayout />
      <ProfilePage />
    </div>
  );
}

export default App;
