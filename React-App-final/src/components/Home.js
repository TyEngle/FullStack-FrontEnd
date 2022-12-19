import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
const [games, setGames] = useState([]);
const baseURL = "http://localhost:8081/games";

useEffect(() => {
    loadGames();
}, {})

const loadGames = async () => {
    const result=await axios.get(baseURL)
    setGames(result.data);
}

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Developer</th>
                        <th scope="col">Release</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    games.map((game,index) => (
                <tr>
                    <th scope="row" key={index}>
                        {index +1}
                    </th>
                    <td>{game.title}</td>
                    <td>{game.developer}</td>
                    <td>{game.release_date}</td>
                    <td>
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
  );
}