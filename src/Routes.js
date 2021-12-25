import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Quizzes from './pages/Quizzes';

function AppRoutes() {
	return (
		<Suspense fallback={null}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Quizzes />} />
					<Route path='quiz/:id' element={<Quiz />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}
export default AppRoutes;
