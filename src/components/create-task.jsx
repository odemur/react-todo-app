import React from 'react';

const Create = (props) => (
    <div className="container create">
        <div className="card">
            <form onSubmit={props.onSubmit}>
                <div className="input-field purple-input">
                    <span className="task-icon"></span>
                    <input type="text" name="singletask" autoComplete="off" placeholder="Please enter a task..." />
                </div>
                <div className="center-text">
                    <button type="submit" className="btn btn-rounded btn-outlined green-btn">Add Task</button>
                </div>
            </form>
        </div>
    </div>
)

export default Create