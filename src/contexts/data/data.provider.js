import React, { useState } from 'react';
import Quizzes from '../../data/Quizzes.json';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
	const [quizzes, setQuizzes] = useState(Quizzes);
	return (
		<DataContext.Provider value={{ quizzes, setQuizzes }}>
			{children}
		</DataContext.Provider>
	);
};
