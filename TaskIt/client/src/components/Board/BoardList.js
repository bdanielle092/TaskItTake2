import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BoardList = ({ boards }) => {


    //Use the .map() array method to iterate the array of boards and generate HTML for each one by invoking the board component function.
    //the key and board arguments look like HTML attributes here, but they actually become properties on an object that gets passed as an argument. key={board.id} board={board} is the equivalent of writing const properties { key: board.id, board: board} in villa js.
    // The board={board} is on the home page. I have linked the board name to the board page for each board
    return (
        <div>
            {boards.map((board) => (
                <div key={board.id} >
                    <Link to={`/board/${board.id}`}>
                        <strong>{board.name}</strong>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default BoardList