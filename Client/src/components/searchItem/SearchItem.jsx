import { useNavigate } from "react-router-dom";
import "./searchItem.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import Reserve from "../reserve/Reserve";

const SearchItem = ({item}) => {
  const id = item._id;
  const [openModal, setOpenModal] = useState(false);

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleClick = () => {
    if(user){
      setOpenModal(true);
    }
    else{
      navigate("/login")
    }
  }

  console.log(id);
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          {/* <Link to={`/guesthouse/${item._id}`}> */}
          <button className="siCheckButton" onClick={handleClick}>See availability</button>
          {/* </Link> */}
        </div>
      </div>
      {openModal && <Reserve setOpen={setOpenModal} guesthouseId={id}/>}
    </div>
  );
};

export default SearchItem;
