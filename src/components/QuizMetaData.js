import React from 'react';
import VideosShow from '../components/VideosShow';
import { FormattedMessage } from "react-intl";

function QuizMetaData({ quiz }) {

	return (
		<>
			<div className='column' dir={'ltr'}>
				<span className='notSelectable title aBeeZee'>{quiz.title}</span>
				<div className='notSelectable given'
					dangerouslySetInnerHTML={{ __html: quiz.description }} />
			</div>
			{quiz.url && <VideosShow link={quiz.url} />}
			<span className='finalScore'>
				<FormattedMessage id="finalScore" />: {quiz.score}
			</span></>
	);
}

export default QuizMetaData;
