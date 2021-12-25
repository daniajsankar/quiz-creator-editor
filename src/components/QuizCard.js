import React from 'react';

function QuizCard({ title, onClick }) {
	return (
		<div className="quizCard center cursor" onClick={onClick} >
			{title}
		</div>
	);
}

export default QuizCard;
