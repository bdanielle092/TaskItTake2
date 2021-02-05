import { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "./Board.css";



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
            <h3 className="BoardName">{board.name} Board</h3>

            {/* <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                <DropdownToggle caret>
                    Dropright
           </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Edit Board</DropdownItem>
                    <DropdownItem>Delete Board</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown> */}


            {/* <Button color="warning" onClick={goToBoardEditForm} >Edit Board</Button> */}
        </div>

    )
}
export default Board