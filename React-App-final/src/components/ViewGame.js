import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewUser() {
    let navigate = useNavigate();
    const baseURL = "http://localhost:8081/games";

    const [game, setGame]=useState({
        title:"",
        developer:"",
        release_date:"",
    })

    const {id}=useParams()

    useEffect(()=>{
        loadGame();
    }, [])

    const loadGame=async ()=>{
        const result=await axios.get(`${baseURL}/${id}`)
        setGame(result.data)
    }

    return (
        <div>
            <div>
                <div>
                    Details Of Game ID :
                    <ul>
                        <li>
                            <b>Title: </b>
                            {game.title}
                            </li>
                        <li>
                            <b>Developer: </b>
                            {game.developer}
                            </li>
                        <li>
                            <b>Release Date: </b>
                            {game.release_date}
                            </li>
                    </ul>
                    <button><Link to={'/'}>Back To Home</Link></button>
                </div>
            </div>
        </div>
    )
}