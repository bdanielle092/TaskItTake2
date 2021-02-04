import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const BoardContext = createContext();

export function BoardProvider(props) {
    const apiUrl = "/api/board";
    const { getToken } = useContext(UserProfileContext);

    const [board, setBoard] = useState([]);

    const refreshBoard = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setBoard));


    const addBoard = (board) =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(board)
            })).then(refreshBoard)

    return (
        <BoardContext.Provider value={{ board, refreshBoard, addBoard }}>
            {props.children}
        </BoardContext.Provider>
    );
}