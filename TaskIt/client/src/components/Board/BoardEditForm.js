// import React, { useState, useEffect, useContext } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { UserProfileProvider } from "../../providers/UserProfileProvider";



// const BoardEditForm = () => {

//     const { getToken } = useContext(UserProfileProvider)
//     const { id } = useParams();
//     const history = useHistory();
//     const [boardToEdit, setBoardToEdit] = useState({ name: "" })


//     const handleSubmit = (evt) => {
//         const newBoard = { ...boardToEdit };
//         newBoard[evt.target.name] = evt.target.value;
//         setBoardToEdit(newBoard);
//     };

//     const updateBoard = (board) => {
//         getToken()
//             .then((token) =>
//                 fetch(`/api/board/${id}`, {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${token}`,
//                     },
//                     body: JSON.stringify(board),
//                 })
//             )
//             .then((evt) => history.push("/"));
//     };

//     return (
//         <div>
//             <Card>
//                 <CardBody>
//                     <Form>
//                         <FormGroup>
//                             <Label for="name">Board Name</Label>
//                             <Input
//                                 id="name"
//                                 type="text"
//                                 name="boardName"
//                                 value={boardToEdit.name}
//                                 onChange={(evt) => handleSubmit(evt)}
//                             />
//                         </FormGroup>
//                     </Form>
//                     <Button

//                         color="warning "
//                         onClick={(evt) => {
//                             evt.preventDefault();
//                             updateBoard(boardToEdit);
//                         }}
//                     >
//                         SUBMIT
//                     </Button>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }
// export default BoardEditForm;