import {stringInclues} from '../util/common';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';
export const PRIORITY_ORDER = ['High', 'Medium', 'Low'];  // Define priority order

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}

// Sorting by Due Date
export function sortByDueDate(list, ascending = true) {
    return list.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        return ascending ? dateA - dateB : dateB - dateA;
    });
}

// Sorting by Priority
export function sortByPriority(list) {
    return list.sort((a, b) => {
        const priorityA = PRIORITY_ORDER.indexOf(a.priority);
        const priorityB = PRIORITY_ORDER.indexOf(b.priority);
        return priorityA - priorityB;
    });
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed',
        'Priority-H': 'High Priority',  // Corrected priority option
        'Priority-M': 'Medium Priority',
        'Priority-L': 'Low Priority',
        'ascending': 'Asc (Due Date)',
        'descending': 'Desc (Due Date)',
    };  
}
