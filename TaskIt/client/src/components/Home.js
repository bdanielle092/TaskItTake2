import React, { useState, useContext } from 'react';
import { UserProfileContext } from "../providers/UserProfileProvider";
import "./Home.css";

const Home = () => {
    const { logout, isAdmin } = useContext(UserProfileContext);
    const user = JSON.parse(localStorage.getItem("userProfile"));


    return (

        <div>
            <div>

                <h1 className="home">Welcome {user.name.split(" ")[0]}!</h1>
                <p className="home2">Click on a  <strong className="tag">Board</strong> to view tasks</p>

            </div>
        </div>

    );
}
export default Home

