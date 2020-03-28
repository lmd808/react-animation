import React from 'react';
import { useState } from 'react';
import DynamicInputs from './useStateDynamicInput';

const useStateDynamicForm = () => {
	const [ taskState, setTaskState ] = useState([ { task: '', dueDate: '' } ]);

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
							<input type="text" className="form-control" name="user" id="user" />
						</div>
						<div className="form-group">
							<label for="bio">Bio</label>
							<input type="text" className="form-control" name="bio" id="bio" />
						</div>

						<div class="form-group">
							<input type="button" className="btn btn-primary" value="Add New task" />
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
											className="task form-control "
										/>
									</div>
									<label for={dateId}>Due Date</label>
									<input
										type="text"
										name={dateId}
										data-idx={idx}
										id={dateId}
										className="dueDate form-control"
									/>
								</div>
							);
						})}

						{/* end taks mapping  */}
						<div className="form-group">
							<input type="submit" className="btn btn-primary" value="Submit" />
						</div>
						{/* We're going to add a task and due date*/}
					</form>
				</div>
			</div>
		</div>
	);
};

export default useStateDynamicForm;
