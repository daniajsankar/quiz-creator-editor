import React, { useState, useContext } from 'react';
import Question from '../components/Question';
import EditQuestion from '../components/EditQuestion';
import QuizMetaData from '../components/QuizMetaData';
import EditQuizMetaData from '../components/EditQuizMetaData';
import { Plus } from '../components/Svgs';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { DataContext } from '../contexts/data/data.provider';

function QuizPage() {
	const { quizzes, setQuizzes } = useContext(DataContext);
	let navigate = useNavigate();
	const location = useLocation();
	const [quiz, setQuiz] = useState(location.state.quiz);
	const [editingQuizMeatData, setEditingQuizMetaData] = useState(false);
	const [editingQuestion, setEditingQuestion] = useState(null);
	const { innerHeight: height } = window;
	const onAddQuestion = () => {
		setEditingQuestion(quiz.questions_answers.length);
		setQuiz((prev) => ({
			...prev, questions_answers: [...prev.questions_answers, {
				"answer_id": null,
				"answers": [
					{
						"id": null,
						"is_true": true,
						"text": ""
					},
				],
				"feedback_false": "",
				"feedback_true": "",
				"id": prev.questions_answers.length,
				"text": ""
			}]
		}));
	}
	let temp;
	const onDelete = (deletedIndex) => {
		temp = [];
		quiz.questions_answers.map((question, index) => {
			if (index !== deletedIndex)
				temp.push(question);
		});
		setQuiz((prev) => ({ ...prev, questions_answers: temp }));
	}
	const onSave = () => {
		temp = quizzes;
		temp[quiz.index] = quiz;
		setQuizzes(temp);
		navigate('/');
	}
	const onCancel = () => {
		navigate('/');
	}
	return (
		<div className={`assignmentPage`}>
			<div className='textContainer'>
				<div className="scroll" style={{ height: height - 210 }} id="scroll" >
					{editingQuizMeatData ? <EditQuizMetaData quiz={quiz} onCancel={() => setEditingQuizMetaData(false)} onSave={(quiz) => {
						setEditingQuizMetaData(false);
						setQuiz((prev) => ({ ...prev, ...quiz }));
					}} /> :
						<QuizMetaData quiz={quiz} setEditing={setEditingQuizMetaData} />}
				</div>
			</div>
			<div className={`questionsContainer`}>
				<div className="scroll" style={{ height: height - 130 }} id="scroll">
					<div className='direction'>
						{quiz.questions_answers.map((question, index) => {
							if (question.id === editingQuestion)
								return <EditQuestion question={question}
									key={index}
									setEditing={setEditingQuestion}
									index={index}
									setQuiz={setQuiz}
									questions={quiz.questions_answers.slice()} />
							return <Question
								question={question}
								key={index}
								index={index}
								setEditing={setEditingQuestion}
								onDelete={onDelete} />
						})}
						<div onClick={onAddQuestion} className='addQuestion questionWrapper cursor'><Plus /></div>
					</div>
				</div>
			</div>
			<div className='buttonsRow row absolute'>
				<button className='saveButton' onClick={onSave}>
					<FormattedMessage id="save" />
				</button>
				<button onClick={onCancel}>
					<FormattedMessage id="cancel" />
				</button>
			</div>
		</div >
	);
}

export default QuizPage;
