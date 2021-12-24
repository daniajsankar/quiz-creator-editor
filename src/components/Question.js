import React from 'react';
import { EditIcon } from './Svgs';

function Question({ question, index, setEditing }) {
	const options = question.answers;
	return (
		<div className='questionWrapper' key={index}>
			<div className='editButton' onClick={() => setEditing(question.id)}><EditIcon /></div>
			<div className='column'>
				<span className='title aBeeZee'>{question.text}</span>
				<span className='feedBackText'>
					{question.feedback_true}
				</span>
				<span className='feedBackText'>
					{question.feedback_false}
				</span>
				<div className='radioWrapper'>
					{options.map((option, index) => {
						return <div key={index} className='answerRow'>
							<div className={`circle center ${option.is_true ? 'selected' : ''}`}>
								{option.is_true && <div className='fill' />}
							</div>
							<span className='text'>{option.text}</span>
						</div>
					})
					}
				</div>
			</div>
		</div>
	);
}

export default Question;
