import React, { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';
import Button from "react-bootstrap/esm/Button.js";
import ToDoForm from './ToDoForm';
import ToDoComponent from './ToDoComponent';

function Toolbar() {
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [toDoList, setToDoList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addToDo = (title, items) => {
        const newToDo = { id: Date.now(), title, items };
        setToDoList([...toDoList, newToDo]);
    };

    const deleteToDo = (id) => {
        setToDoList(toDoList.filter(toDo => toDo.id !== id));
    };

    return (
        <div>
            {userList.map(user => (
                <Button
                    variant='light'
                    key={user.id}
                    onClick={() => setLoggedInUser(user.id)}
                    style={{
                        margin: '5px',
                        fontWeight: user.id === loggedInUser ? 'bold' : 'normal',
                    }}
                >
                    {user.name} {user.id === loggedInUser}
                </Button>
            ))}
            <Button 
                    variant="dark"
                    style={{margin: '5px'}}>
                    
                Archived
            </Button>
            <Button variant="dark" onClick={() => setShowModal(true)}>
                Create
            </Button>

            {toDoList.length > 0 && toDoList.map((toDo) => (
                <ToDoComponent 
                    key={toDo.id} 
                    title={toDo.title} 
                    items={toDo.items} 
                    onDelete={() => deleteToDo(toDo.id)}
                />
            ))}

            <ToDoForm 
                show={showModal} 
                onClose={() => setShowModal(false)} 
                onSave={addToDo}
            />
        </div>
    );
}

export default Toolbar;
