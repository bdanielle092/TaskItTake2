import { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useParams } from "react-router-dom";


const Board = () => {
    const { getToken } = useContext(UserProfileContext);
    const { id } = useParams();
    const [board, setBoard] = useState([])
    useEffect(() => {
        getToken()
            .then((token) =>
                fetch(`/api/board/${id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            )
            .then((res) => res.json())
            .then((board) => { setBoard(board) });

    });
    // const goToBoardEditForm = () => {
    //     history.push("/BoardEditForm");
    // }
    return (
        <div>
            <h3>{board.name}</h3>

            {/* <Button color="warning" onClick={goToBoardEditForm} >Edit Board</Button> */}
        </div>

    )
}
export default Board