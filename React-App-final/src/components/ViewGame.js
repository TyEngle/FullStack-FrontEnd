import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function ViewUser() {
  const [game, setGame] = useState({
    title: "",
    developer: "",
    releaseDate: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadGame();
  }, []);
  //I think our database URL will replace
  //the URL in the following function
  const loadGame = async () => {
    const result = await axios.get(
      `https://mocki.io/v1/3363fcc3-ba18-4fdb-a5dc-9175f4ded02e/${id}`
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            Game Details
          </h2>

          <div className="card">
            <div className="card-header">
              Details of game id : {game.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title:</b>
                  {game.title}
                </li>
                <li className="list-group-item">
                  <b>Developer:</b>
                  {game.developer}
                </li>
                <li className="list-group-item">
                  <b>Release Date:</b>
                  {game.releaseDate}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
