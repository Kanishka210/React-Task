import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import "./styles/panel.scss";
import "./styles/RoutingWindow.scss";

import LeftNavigation from "./components/LeftPanel/LeftNavigation";
import RightNavigation from "./components/RightPanel/RightNavigation";
import { Routes, Route } from "react-router-dom";
import RoutingWindow from "./components/LeftPanel/RoutingWindow";
import listParameter from "./components/LeftPanel/ListParameter";
import recentlyAdded from "./components/LeftPanel/RecentlyAdded";
// import { Value } from 'sass';

function App() {
  const [isMenubarClick, setIsMenubarClick] = useState(false);
  const isToggle = () => {
    setIsMenubarClick(!isMenubarClick);
  };

  return (
    <div>
      <Header setdisplay={isToggle} />

      <div className="panel">
        <LeftNavigation toggle={isMenubarClick} />
        <Routes>
          <Route
            path="/"
            element={<RightNavigation change={setIsMenubarClick} />}
          />
          {/* <Route path="/BuzzName" exact element={<RoutingComponent name="Buzz Name"/>}/> */}
          {listParameter.map((post, index) => {
            return (
              <Route
                path={post.url}
                key={index}
                element={<RoutingWindow paths={post.name} />}
              />
            );
          })}
          {recentlyAdded.map((post, index) => {
            return (
              <Route
                path={post.url}
                key={index}
                element={<RoutingWindow paths={post.name} />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
