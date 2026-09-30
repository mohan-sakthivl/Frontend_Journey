import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <>
      <Header />
      <div className="profile-container">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
          <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
};

export default App;
