import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ToDoForm({ show, onClose, onSave }) {
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(true); 

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleConfirm = () => {
        if (title.trim() === '') {
            setIsTitleValid(false); 
            return;
        }

        setIsTitleValid(true);
        onSave(title, items); 
        setTitle('');
        setItems([]);
        onClose();
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (!isTitleValid && e.target.value.trim() !== '') {
            setIsTitleValid(true); 
        }
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New To Do</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="todoTitle">
                        <Form.Label>Title *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={handleTitleChange}
                            
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="todoItems">
                        <Form.Label>Items</Form.Label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Enter item"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                            />
                            <Button variant="secondary" onClick={handleAddItem}>Add</Button>
                        </div>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onClose}>Close</Button>
                <Button 
                    variant="light" 
                    onClick={handleConfirm}
                    disabled={!title.trim()} 
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ToDoForm;
