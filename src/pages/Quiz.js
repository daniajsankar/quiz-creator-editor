import React, { useState } from 'react';
import Radio from '../components/Question';
import QuizMetaData from '../components/QuizMetaData';

const Quiz = {
	"created": "2020-09-09 09:26:39",
	"description": "Description",
	"id": 29,
	"modified": "2020-09-09 09:26:39",
	"questions_answers": [
		{
			"answer_id": null,
			"answers": [
				{
					"id": 122,
					"is_true": false,
					"text": "question 1 answer 1 false"
				},
				{
					"id": 123,
					"is_true": false,
					"text": "question 1 answer 2 false"
				},
				{
					"id": 124,
					"is_true": true,
					"text": "question 1 answer 3 true"
				},
				{
					"id": 125,
					"is_true": false,
					"text": "question 1 answer 4 false"
				}
			],
			"feedback_false": "question 1 false feedback",
			"feedback_true": "question 1 true feedback",
			"id": 53,
			"text": "question 1 text"
		},
		{
			"answer_id": null,
			"answers": [
				{
					"id": 126,
					"is_true": true,
					"text": "question 2 answer 1 true"
				},
				{
					"id": 127,
					"is_true": false,
					"text": "question 2 answer 2 false"
				}
			],
			"feedback_false": "question 2 false feedback",
			"feedback_true": "question 2 true feedback",
			"id": 54,
			"text": "question 2 text"
		},
		{
			"answer_id": null,
			"answers": [
				{
					"id": 128,
					"is_true": false,
					"text": "question 3 answer 1 false"
				},
				{
					"id": 129,
					"is_true": true,
					"text": "question 3 answer 2 true"
				},
				{
					"id": 130,
					"is_true": false,
					"text": "question 3 answer 3 false"
				}
			],
			"feedback_false": "question 3 false feedback",
			"feedback_true": "question 3 true feedback",
			"id": 55,
			"text": "question 3 text"
		}
	],
	"score": null,
	"title": "quiz title",
	"url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
};
function Assignment({ history }) {
	const [quiz, setQuiz] = useState(Quiz);
	const { innerHeight: height } = window;
	return (
		<div className={`assignmentPage`}>
			<div className='textContainer'>
				<div className="scroll" style={{ height: height - 180 }} id="scroll" >
					<QuizMetaData quiz={quiz} />
				</div>
			</div>
			<div className={`questionsContainer`}>
				<div className="scroll" style={{ height: height - 100 }} id="scroll">
					<div className='direction'>
						{quiz.questions_answers.map((question, index) => {
							return <Radio question={question} key={index} setQuestions={setQuiz} index={index} questions={quiz} />
						})}
					</div>
				</div>
			</div>
		</div >
	);
}

export default Assignment;
