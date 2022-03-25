import React, { useState } from "react";
import "./DesignFirm.scss";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";

const DesignFirm = () => {
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="design-firm-page">
      Design Your Firm
      <Card className="design-card">
        <Card.Body>
          It's time to design your firm! With your team, work through each
          section below. When you are ready, click Confirm Design to lock your
          selections in.
        </Card.Body>
      </Card>
      <Row className="identity-specialization">
        <Col md={6} sm={12} className="identity">
          <Row className="identity-header">
            <Col sm={3}>Identity</Col>
          </Row>
          <Row className="first-name">
            <Col className="identity-text" sm={3} xs={12}>
              Firm Name:
            </Col>
            <Col sm={8} xs={11} className="p-0">
              <Form.Control type="text" placeholder="Enter firm name here" />
            </Col>
            <Col sm={1} xs={1}>
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
          <Row className="firm-tagline">
            <Col className="identity-text" sm={3} xs={12}>
              Firm Tagline:
            </Col>
            <Col sm={8} xs={11} className="p-0">
              <Form.Control type="text" placeholder="Enter firm tagline here" />
            </Col>
            <Col sm={1} xs={1}>
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
          <Row className="firm-value">
            <Col className="identity-text" sm={3} xs={12}>
              Firm Values:
            </Col>
            <Col sm={8} xs={11} className="p-0">
              <Form.Control type="text" placeholder="Enter top 3 values here" />
            </Col>

            <Col sm={1} xs={1}>
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
          <Row className="number-partners">
            <Col className="identity-text" sm={4} xs={12}>
              Number of Partners:
            </Col>
            <Col sm={7} xs={11} className="number-partners-select p-0">
              <Form.Control
                value={inputValue}
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Col>
            <Col sm={1} xs={1} className="number-partners-help-icon">
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
        </Col>

        <Col md={6} sm={12} className="specialization">
          <Row>
            <Col className="specialization-header" sm={3}>
              Specialization
            </Col>
          </Row>
          <Row className="specialization-expertise">
            <Col className="specialization-text" sm={3} xs={12}>
              Expertise:
            </Col>
            <Col sm={8} xs={11} className="p-0">
              <Form.Range variant="danger" />
              <span className="routine-label">Routine</span>
              <span className="unique-label">Unique</span>
            </Col>
            <Col sm={1} xs={1}>
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
          <Row className="specialization-industries">
            <Col sm={3} xs={12}>
              Industries:
            </Col>
            <Col sm={8} xs={11} className="p-0">
              <Row>
                <Col sm={6}>
                  <Form.Check type="checkbox" label="Financial Services" />
                </Col>
                <Col sm={6} className="non-profit-text">
                  <Form.Check type="checkbox" label="Non-profit" />
                </Col>
              </Row>
            </Col>
            <Col sm={1} xs={1}>
              <HelpSharpIcon className="help-icon" />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 8, offset: 3 }} xs={11} className="p-0">
              <Row>
                <Col sm={6}>
                  <Form.Check type="checkbox" label="Consumer Products" />
                </Col>
                <Col sm={6}>
                  <Form.Check type="checkbox" label="Life Science" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 8, offset: 3 }} xs={11} className="p-0">
              <Row>
                <Col sm={6}>
                  <Form.Check type="checkbox" label="Healthcare" />
                </Col>
                <Col sm={6}>
                  <Form.Check
                    type="checkbox"
                    label="Technology, Media & Telecommunications"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 8, offset: 3 }} xs={11} className="p-0">
              <Row>
                <Col sm={6}>
                  <Form.Check type="checkbox" label="Industries" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button variant="outline-success" className="confirm-button">
        Confirm Design
      </Button>{" "}
    </div>
  );
};

export default DesignFirm;
