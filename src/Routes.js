import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';

function AppRoutes() {
	return (
		<Suspense fallback={null}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Quiz />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}
export default AppRoutes;
