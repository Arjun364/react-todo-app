import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { formData, handleChange, handleKeyUp } = props;
    console.log(formData);
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={formData.value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
                name="value"  // Correct name for the text input
            />
            <input type="date"  value={formData.dueDate}  onChange={handleChange} name="dueDate" />
            <select value={formData.priority} onChange={handleChange} name='priority' >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    );
}

export default enhance(InputBox);
