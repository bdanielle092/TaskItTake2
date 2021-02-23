import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

//context stores data to use in the application therefore you need to create a context
export const BoardContext = createContext();

//defining the data provider components which will allow other components to use the data in context
export const BoardProvider = (props) => {
    // const apiUrl = "/api/board";
    const { getToken } = useContext(UserProfileContext);

    //holds the state of the component board, and a function that updates it
    const [board, setBoard] = useState({});
    const [boards, setBoards] = useState([])



    //fetch calls
    const getAllBoards = () => {
        getToken().then((token) =>
            fetch("/api/board", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())

                .then(setBoards));
    };


    const getBoardById = (boardId) => {
        getToken().then((token) =>
            fetch(`/api/board/${boardId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer 4{token}`
                }
            })).then((resp) => resp.json())
            .then(setBoard)
    };


    const addBoard = (board) => {
        getToken().then((token) =>
            fetch("/api/board", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(board)
            })).then(getAllBoards)
    };

    const updateBoard = (id, board) => {
        getToken().then((token) =>
            fetch(`/api/board/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "content-Type": "application/json"
                },
                body: JSON.stringify(board)
            })).then(getAllBoards)
    };

    const deleteBoard = (id) => {
        getToken().then((token) =>
            fetch(`/api/board/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(getAllBoards)
    };



    //in the return these lines define what component will be expose to other components. These are the variables in the value attribute
    return (
        <BoardContext.Provider value={{ board, boards, getAllBoards, getBoardById, addBoard, updateBoard, deleteBoard }}>
            {props.children}
        </BoardContext.Provider>
    );
}