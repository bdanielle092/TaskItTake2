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
                <p className="home2">Click on the  <strong className="tag"> Board Menu</strong> to go to a board</p>

            </div>
        </div>

    );
}
export default Home

