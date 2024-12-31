import React from 'react';
import TodoItem from './TodoItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';
import {applyFilter, sortByDueDate, sortByPriority} from '../../services/filter';
export default function FilteredList(props) {
    const {items, changeStatus, filter, sortOption} = props;

    // Apply the selected filter first
    let filteredItems = applyFilter(items, filter);

    // Sort the filtered items based on the selected sorting option
    if (sortOption === 'ascending' || sortOption === 'descending') {
        filteredItems = sortByDueDate(filteredItems, sortOption === 'ascending');
    } else if (['Priority-H', 'Priority-M', 'Priority-L'].includes(sortOption)) {
        filteredItems = sortByPriority(filteredItems);
    }

    if (filteredItems.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {filteredItems.map(item => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}

