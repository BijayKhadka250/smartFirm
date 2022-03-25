import React from "react";
import "./Header.scss";
import { Row, Col } from "react-bootstrap";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TravelExploreSharpIcon from "@mui/icons-material/TravelExploreSharp";
import { dropDown } from "./Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

export const home = () => {
  return (
    <NavLink to="/">
      <span className="great-color">Great</span> Logo
    </NavLink>
  );
};

export const designFirm = () => {
  return <NavLink to="/design-firm">Design Your Firm</NavLink>;
};

export const runFirm = () => {
  return <NavLink to="/run-firm">Run Your Firm</NavLink>;
};

export const explore = () => {
  return (
    <NavLink to="/explore">
      <span>
        <TravelExploreSharpIcon className="travel-explore" />
      </span>
      Explore
    </NavLink>
  );
};

export const leaderboards = () => {
  return (
    <NavLink to="/leaderboard">
      <span>
        <LeaderboardIcon className="leader-icon" />
      </span>
      Leaderboards
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col>
          <div className="row-logo-side">
            <div className="logo">{home()}</div>
            <div className="design-firm">{designFirm()}</div>
            <div className="run-firm">{runFirm()}</div>
          </div>
        </Col>

        <Col>
          <div className="right-header">
            <div className="explore">{explore()}</div>
            <div className="leaderboards">{leaderboards()}</div>
            <div className="header-dropdown">{dropDown()}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
