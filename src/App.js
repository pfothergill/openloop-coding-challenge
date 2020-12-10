import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([]);

	const [firstNameValue, setfirstNameValue] = useState('');
	const [lastNameValue, setLastNameValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [noteValue, setNoteValue] = useState('')
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItem = {
			firstName: firstNameValue,
			lastName: lastNameValue,
			email: emailValue,
			note: noteValue,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setfirstNameValue('');
		setLastNameValue('');
		setEmailValue('');
		setNoteValue('');
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	return (
		<div class="mainView">
			<div class="contentView">
				<div class="title">
					<h1>Add Users</h1>
				</div>
				<div class="column">
					<form>
						<label>
							First Name
							<input value={firstNameValue} onChange={(event) => setfirstNameValue(event.target.value)} placeholder='First Name...' />
						</label>

						<label>
							Last Name
							<input value={lastNameValue} onChange={(event) => setLastNameValue(event.target.value)} placeholder='Last Name...' />
						</label>

						<label>
							Email
							<input value={emailValue} onChange={(event) => setEmailValue(event.target.value)} placeholder='Email...' />
						</label>

						<label>
							Note
							<input value={noteValue} onChange={(event) => setNoteValue(event.target.value)} placeholder='Add a note...' />
						</label>
						<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
					</form>
				</div>
				<div class="column">
					<div>
						{items.map((item, index) => (
							
							<div className='item-container'>
								<div className='item-name' onClick={() => toggleComplete(index)}>
									{item.isSelected ? (
										<>
											<FontAwesomeIcon icon={faCheckCircle} />
											<span>{'  ' + item.firstName + ' ' + item.lastName + ' | ' + item.email + ' | ' + item.note}</span>
										</>
									) : (
										<>
											<ul>
												<span>{item.firstName + ' ' + item.lastName + ' | ' + item.email + ' | ' + item.note}</span>
												<button type="submit">Remove</button>
											</ul>
											
										</>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
