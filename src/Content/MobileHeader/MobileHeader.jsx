import React, { useState } from "react";
import { home, designFirm, runFirm } from "../../Header/Header";
import { dropDown } from "../../Header/Dropdown/Dropdown";
import "./MobileHeader.scss";
import { Col, Row, Offcanvas } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
const MobileHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mobile-header">
      <Row>
        <Col xs={8}>
          <div className="logo-mobile">{home()}</div>
        </Col>

        <Col xs={2}>
          <MenuIcon className="hamburgar-icon" onClick={handleShow} />
        </Col>

        <Col xs={2}>
          <div className="dropdown-mobile">{dropDown()}</div>
        </Col>
      </Row>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <CloseIcon className="close-icon" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose}>
          <div className="offcanvas-text">{designFirm()}</div>
          <div className="offcanvas-text">{runFirm()}</div>
          <div className="offcanvas-text">
            <NavLink to="/explore">Explore</NavLink>
          </div>
          <div className="offcanvas-text">
            <NavLink to="/leaderboard">Leaderboards</NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileHeader;
