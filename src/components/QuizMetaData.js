import React from 'react';
import VideosShow from '../components/VideosShow';
import { FormattedMessage } from "react-intl";
import { EditIcon } from './Svgs';

function QuizMetaData({ quiz, setEditing }) {

	return (
		<div className='column'>
			<div className='editButton' onClick={() => setEditing(true)}><EditIcon /></div>
			<div className='column' dir={'ltr'}>
				<span className='notSelectable title aBeeZee'>{quiz.title}</span>
				<div className='description'>{quiz.description}</div>
			</div>
			{quiz.url && <VideosShow link={quiz.url} />}
			<span className='finalScore'>
				<FormattedMessage id="finalScore" />: {quiz.score}
			</span>
		</div>
	);
}

export default QuizMetaData;
