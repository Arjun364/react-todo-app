import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    console.log(data);
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label style={{ cursor: 'pointer' }}>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text} ({data.priority})
                </label>
                {data.dueDate && <span className="pull-right">{data.dueDate}</span>}
            </div>
        </li>
    );
}
