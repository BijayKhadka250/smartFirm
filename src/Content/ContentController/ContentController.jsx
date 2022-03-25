import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import DesignFirm from "../Design Firm/DesignFirm";
import RunFirm from "../RunFirm/RunFirm";
import Explore from "../Explore/Explore";
import Leaderboard from "../Leaderboards/Leaderboards";

const ContentController = () => {
  const contentRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-firm" element={<DesignFirm />} />
        <Route path="/run-firm" element={<RunFirm />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    );
  };

  return <>{contentRouter()}</>;
};

export default ContentController;
