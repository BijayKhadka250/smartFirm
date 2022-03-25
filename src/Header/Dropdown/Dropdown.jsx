import { Dropdown } from "react-bootstrap";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./dropdown.scss";
export const dropDown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>
          <MoreHorizIcon className="horiz-icon" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item>
            <span>
              <PeopleAltSharpIcon className="person-icon" />
            </span>
            <span className="dropdown-text">View Teams</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span>
              <HelpSharpIcon className="help-icon" />
            </span>
            <span className="dropdown-text">Help/FAQs</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
