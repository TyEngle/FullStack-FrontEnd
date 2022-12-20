import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditGame() {
    let navigate = useNavigate();
    const baseURL = "http://localhost:8081/games";

    const [game, setGame]=useState({
        title:"",
        developer:"",
        release_date:"",
    })

    const {id}=useParams()

    const{title,developer,release_date}=game

    const onInputChange=(e)=>{
        setGame({...game,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadGame();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${baseURL}/${id}`, game);
        navigate("/")
    };

    const loadGame = async () =>{
        const result=await axios.get(`${baseURL}/${id}`)
        setGame(result.data)
    }

    return(
    <div className="container">
        <div className="row">
            <div>
                <h2>Edit User</h2>
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