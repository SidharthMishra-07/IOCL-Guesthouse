import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = (setOpen, guesthouseId) => {
    const { data, loading, error } = useFetch(`/guesthouse/room/${guesthouseId}`);
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen.setOpen(false)}
                />
                <span>Select your rooms:</span>
            </div>
        </div>
    )
}

export default Reserve
