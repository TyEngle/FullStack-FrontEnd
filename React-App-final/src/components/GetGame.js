import { getPaginationItemUtilityClass } from "@mui/material";
import React from "react";
import GetApi from "../components/GetApi";

const GetGame = () => {
  // Create state variables
  let [responseData, setResponseData] = React.useState("");

  // fetches data
  const fetchData = (e) => {
    e.preventDefault();

    GetApi.getData()
      .then((response) => {
        setResponseData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{responseData.title}</h1>

      <button onClick={(e) => fetchData(e)} type="button">
        Click Me For Data
      </button>

      {responseData.dates &&
        responseData.dates.map((date) => {
          return <p>{date}</p>;
        })}
    </div>
  );
};

export default GetGame;
