import React, { useState, useContext, useEffect } from 'react';
import { UserProfileContext } from "../providers/UserProfileProvider";
import { BoardContext } from "../providers/BoardProvider";
// import Board from "./Board/Board";
import BoardList from "./Board/BoardList";
import { Col } from "reactstrap"
import "./Home.css";



const Home = () => {
    const { logout, isAdmin } = useContext(UserProfileContext);
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const { board, refreshBoard } = useContext(UserProfileContext);
    const { getToken } = useContext(UserProfileContext, BoardContext);
    const [board, setBoard] = useState();




    useEffect(() => {

        fetch(`/api/board`, {
            method: 'GET',

        })
            .then((res) => res.json())
            .then((board) => {
                setBoard(board);
            });

    }, []);
    if (!board) {
        return null;
    }


    return (

        <div>
            <div>

                <h1 className="home">Welcome {user.name.split(" ")[0]}!</h1>
                <p className="home2">Click on a  <strong className="tag">Board</strong> to view tasks</p>
                <Col>
                    <BoardList board={board} />
                </Col>
            </div>
        </div>

    );
}
export default Home

