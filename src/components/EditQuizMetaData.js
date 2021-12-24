import React, { useState } from 'react';
import { FormattedMessage, useIntl } from "react-intl";

function EditQuizMetaData({ quiz, onSave, onCancel }) {
	const [tempQuiz, setTempQuiz] = useState(quiz);
	const onChange = (e) => {
		const { value, name } = e.target;
		setTempQuiz((prev) => ({ ...prev, [name]: value }));
	}
	const intl = useIntl();
	return (
		<div className='column editQuiz'>
			<input className='notSelectable title aBeeZee' name='title' value={tempQuiz.title} onChange={onChange}
				placeholder={intl.formatMessage({ id: "title" })} />
			<textarea name='description' value={tempQuiz.description} onChange={onChange} placeholder={intl.formatMessage({ id: "description" })} />
			<input name='url' value={tempQuiz.url} onChange={onChange} placeholder={intl.formatMessage({ id: "youtubeUrl" })} />
			<span className='finalScore'>
				<FormattedMessage id="finalScore" />: <input name='score' value={tempQuiz.score} onChange={onChange} />
			</span>
			<div className='buttonsRow row'>
				<button className='saveButton' onClick={() => onSave(tempQuiz)}>
					<FormattedMessage id="save" />
				</button>
				<button onClick={onCancel}>
					<FormattedMessage id="cancel" />
				</button>
			</div>
		</div>
	);
}

export default EditQuizMetaData;
