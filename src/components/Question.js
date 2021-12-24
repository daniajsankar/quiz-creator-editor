import React from 'react';

function Question({ question, setQuestions, index, questions }) {
	const options = question.answers;
	let temp;
	const onAnswer = (type, value) => {
		temp = questions;
		temp[index][type] = value;
		setQuestions([...temp]);
	}
	return (
		<div className='questionWrapper' key={index}>
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
						return <div key={index} className='answerRow cursor' onClick={() => onAnswer('answer', option.id)}>
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
