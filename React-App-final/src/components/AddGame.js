import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddGame() {
    let navigate = useNavigate();
    const baseURL = "http://localhost:8081/games";

    const [game, setGame]=useState({
        title:"",
        developer:"",
        release_date:"",
    })

    const{title,developer,release_date}=game

    const onInputChange=(e)=>{
        setGame({...game,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(baseURL, game);
        navigate("/")
    };

    return(
    <div>
        <div>
            <div>
                <h2>Add User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                        <div>
                            <label htmlFor="Title">Title </label>
                            <input type={"text"} placeholder="Enter the game" name="title" value={title} onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="Developer">Developer </label>
                            <input type={"text"} placeholder="Enter the developer" name="developer" value={developer} onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="Release">Release Date </label>
                            <input type={"text"} placeholder="Enter the release date" name="release_date" value={release_date} onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
    

}