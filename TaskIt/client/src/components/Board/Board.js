import { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useParams, useHistory } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Col } from 'reactstrap';
import "./Board.css";




const Board = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const { id } = useParams();
    const history = useHistory();
    //setting the state of board and then updating the state of board
    const [board, setBoard] = useState([]);







    //taking user to the edit form   
    const goToBoardEditForm = () => {
        history.push(`/BoardEditForm/${id}`);
    }



    return (
        <div>
            <h3 className="BoardName">{board.name} Board</h3>

            <UncontrolledDropdown>
                <DropdownToggle caret>
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={goToBoardEditForm}>Edit {board.name} Board</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Delete {board.name} Board</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>



        </div>

    )
}
export default Board