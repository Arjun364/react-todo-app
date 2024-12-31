import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';

export default compose(
    withState('formData', 'setFormData', props => {
        console.log('got props', props);
        return {
            value: props.value || '',
            priority: props.priority || 'Medium', // Default priority
            dueDate: props.dueDate || ''
        }
    }),  // Single state object for all form data
    withHandlers({
        handleKeyUp: ({ addNew, formData, setFormData}) => e => {
            const { value, priority, dueDate } = formData;  // Access formData directly
            const text = value.trim();

            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                addNew(text, priority, dueDate);  // Pass formData values
                setFormData({ value: '', priority: 'Medium', dueDate: '' });  // Reset form data
            }
        },
        handleChange: ({ setFormData }) => e => {
            const { name, value } = e.target;
            setFormData(prevState => ({ ...prevState, [name]: value }));  // Update the specific field
        }
    })
);
