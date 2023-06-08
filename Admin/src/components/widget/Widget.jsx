import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import KingBedIcon from '@mui/icons-material/KingBed';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        amount: 100,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "guesthouse":
      data = {
        title: "GUESTHOUSES",
        amount: 50,
        link: "View all guesthouses",
        icon: (
          <HolidayVillageIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "rooms":
      data = {
        title: "ROOMS",
        amount: 100,
        link: "View all rooms",
        icon: (
          <KingBedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <Link to={`/${type}`} style={{ textDecoration: "none" }}>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      </Link>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon />
          {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
