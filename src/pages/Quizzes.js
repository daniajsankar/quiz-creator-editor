import React, { useContext } from 'react';
import NewQuiz from '../data/NewQuiz.json';
import QuizCard from '../components/QuizCard';
import { FormattedMessage } from "react-intl";
import { Plus } from '../components/Svgs';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../contexts/data/data.provider';

function QuizzesPage() {
	const { quizzes, setQuizzes } = useContext(DataContext);
	let navigate = useNavigate();
	let newQuiz;
	const onAddQuiz = () => {
		newQuiz = { ...NewQuiz, created: new Date(), modified: new Date(), id: quizzes.length, index: quizzes.length };
		setQuizzes((prev) => ([...prev, newQuiz]));
		navigate(`/quiz/${newQuiz.id}`, { state: { quiz: newQuiz } });
	}
	return (
		<div className={`QuizzesPage`}>
			<span className='title'>
				<FormattedMessage id='quizzes' />
			</span>
			<div className='quizzesRow'>
				{quizzes.map((quiz, index) => {
					return <div key={index} className='quizzesColumn'>
						<QuizCard onClick={() => {
							navigate(`/quiz/${quiz.id}`, { state: { quiz: { ...quiz, index } } });
						}} title={quiz.title} />
					</div>;
				})}
				<div className='quizzesColumn' key={quizzes.length}>
					<div onClick={onAddQuiz} className='quizCard center cursor'><Plus /></div>
				</div>
			</div>
		</div >
	);
}

export default QuizzesPage;
