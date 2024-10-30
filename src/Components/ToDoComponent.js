import React from 'react';
import Button from 'react-bootstrap/Button';

function ToDoComponent({ title, items, onDelete }) {
    
    if (!title && (!items || items.length === 0)) return null;

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Button variant="danger" onClick={onDelete}>Delete</Button>
        </div>
    );
}

export default ToDoComponent;