
// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import {
//     Form,
//     FormGroup,
//     Card,
//     CardBody,
//     Label,
//     Input,
//     Button,
// } from "reactstrap";
// import { UserProfileContext } from "../../providers/UserProfileProvider";


// const BoardForm = () => {
//     const [board, setBoard] = useState([])
//     const { getToken } = useContext(UserProfileContext);
//     const history = useHistory();


//     const handleSubmit = (evt) => {
//         const newBoard = { ...board };
//         newBoard[evt.target.name] = evt.target.value;
//         setBoard(newBoard);
//     };

//     const addBoard = (board) => {
//         getToken()
//             .then((token) =>
//                 fetch("/api/board", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/JSON",
//                         Authorization: `Bearer ${token}`,
//                     },
//                     body: JSON.stringify(board),
//                 })
//             )
//             .then(() => history.push(`/`));
//     };

//     return (
//         <div>
//             <Card>
//                 <CardBody>
//                     <form>
//                         <FormGroup>
//                             <Label for="name">Board Name</Label>
//                             <Input
//                                 id="name"
//                                 type="text"
//                                 name="boardName"
//                                 onChange={(evt) => handleSubmit(evt)}
//                             />
//                         </FormGroup>
//                     </form>
//                     <Button
//                         color="warning "
//                         onClick={(evt) => {
//                             evt.preventDefault();
//                             addBoard(board);
//                         }}
//                     >
//                         SUBMIT
//                     </Button>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };
// export default BoardForm 
