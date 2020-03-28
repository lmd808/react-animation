import React from 'react';
import { useState } from 'react';
//import taskInputs from './useStateDynamicInput';

const useStateDynamicForm = () => {
	const [ userState, setUserState ] = useState({
		user: '',
		bio: ''
	});

	const handleUserChange = (e) =>
		setUserState({
			...userState,
			[e.target.name]: [ e.target.value ]
		});

	const blankTask = { task: '', dueDate: '' };
	const [ taskState, setTaskState ] = useState([ { ...blankTask } ]);

	const addTask = () => {
		setTaskState([ ...taskState, { ...blankTask } ]);
	};

	// const removeTask = ()=>{

	// }

	const handleTaskChange = (e) => {
		const updatedTask = [ ...taskState ];
		console.log(updatedTask);
		updatedTask[e.target.dataset.idx][e.target.className] = e.target.value;
		setTaskState(updatedTask);
	};

	return (
		<div className="container justify-content-center">
			<div className="row justify-content-center">
				<div className="col-sm-8 offset-4 justify-content-center">
					<h1>Dynamic Task List</h1>
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col-sm-8 offset-2">
					<form>
						<div className="form-group">
							<label for="user">User</label>
							<input
								type="text"
								className="form-control"
								name="user"
								id="user"
								onChange={handleUserChange}
							/>
						</div>
						<div className="form-group">
							<label for="bio">Bio</label>
							<input
								type="text"
								className="form-control"
								name="bio"
								id="bio"
								onChange={handleUserChange}
							/>
						</div>

						{/* task mapping */}
						{taskState.map((val, idx) => {
							const taskId = `task-${idx}`;
							const dateId = `dueDate-${idx}`;
							return (
								<div className="form-group">
									<div key={`task-${idx}`}>
										{/* ${idx + 1 } takes the index of the the task and add one to it -giving us the proper # value */}
										<label for={taskId}>{`Task #${idx + 1}`}</label>
										<input
											type="text"
											name={taskId}
											data-idx={idx}
											id={taskId}
											className="task"
											value={taskState[idx].task}
											onChange={handleTaskChange}
										/>
									</div>
									<label for={dateId}>Due Date</label>
									<input
										type="text"
										name={dateId}
										data-idx={idx}
										id={dateId}
										className="dueDate"
										value={taskState[idx].dueDate}
										onChange={handleTaskChange}
									/>
								</div>
							);
						})}

						{/* end taks mapping  */}
						<div class="form-group">
							<input type="button" className="btn btn-primary" value="Add New task" onClick={addTask} />
						</div>
						<div className="form-group">
							<input type="submit" className="btn btn-primary" value="Stash My list" />
						</div>
						{/* We're going to add a task and due date*/}
					</form>
				</div>
			</div>
		</div>
	);
};

export default useStateDynamicForm;
