import './Task.css';

const TaskName = (props) => {

    return (
        <div className="Tasks">
            <input className='checkbox' type='checkbox'></input>
            <label className="TaskName">{props.TaskName}
            </label>
        </div>
    );
};

export default TaskName;