import React, { useState } from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import { Plus } from './Svgs';

function EditQuestion({ question, index, setEditing, setQuiz, questions }) {
	const [tempQuestion, setTempQuestion] = useState(question);
	const [options, setOptions] = useState(question.answers.slice());
	const onChange = (e) => {
		const { value, name } = e.target;
		setTempQuestion((prev) => ({ ...prev, [name]: value }));
	}
	const intl = useIntl();
	const onCancel = () => {
		setEditing(null);
	}
	let temp;
	const onSave = () => {
		temp = questions;
		temp[index] = tempQuestion;
		setQuiz((prev) => ({ ...prev, questions_answers: temp }));
		onCancel();
	}
	const onOptionChange = (index, value) => {
		temp = options.slice();
		temp[index].text = value;
		setOptions(temp);
		setTempQuestion((prev) => ({ ...prev, answers: temp }));
	}
	const onSelect = (id) => {
		temp = options.slice();
		temp.map((answer) => {
			if (answer.id === id)
				answer.is_true = true;
			else answer.is_true = false;
		});
		setOptions([...temp]);
	}
	const onAddQuestion = () => {
		setOptions((prev) => ([
			...prev,
			{
				"id": options.length,
				"is_true": false,
				"text": ""
			},
		]
		));
	}
	return (
		<div className='questionWrapper' key={index}>
			<div className='column'>
				<input className='title aBeeZee'
					value={tempQuestion.text}
					name='text' onChange={onChange}
					placeholder={intl.formatMessage({ id: "title" })} />
				<input className='feedBackText'
					value={tempQuestion.feedback_true}
					name='feedback_true' onChange={onChange}
					placeholder={intl.formatMessage({ id: "trueFeedback" })}
				/>
				<input className='feedBackText'
					value={tempQuestion.feedback_false}
					name='feedback_false' onChange={onChange}
					placeholder={intl.formatMessage({ id: "falseFeedback" })}
				/>
				<div className='radioWrapper'>
					{options.map((option, index) => {
						return <div key={index} className='answerRow cursor'>
							<div className={`circle center ${option.is_true ? 'selected' : ''}`} onClick={() => onSelect(option.id)}>
								{option.is_true && <div className='fill' />}
							</div>
							<input className='text'
								value={option.text}
								onChange={(e) => onOptionChange(index, e.target.value)}
								placeholder={`${intl.formatMessage({ id: "option" })} ${index + 1}`}
							/>
						</div>
					})
					}
					<div onClick={onAddQuestion} className='addAnswer cursor'><Plus /></div>
				</div>
			</div>
			<div className='row buttonsRow'>
				<button className='saveButton' onClick={onSave}>
					<FormattedMessage id="save" />
				</button>
				<button onClick={onCancel}>
					<FormattedMessage id="cancel" />
				</button>
			</div>
		</div>
	);
}

export default EditQuestion;
