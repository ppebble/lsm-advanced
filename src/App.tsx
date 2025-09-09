import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';

const App = () => {
	return (
		<Routes>
			<Route element={<Navigation />}>
				<Route path='/' element={<Home />} />
			</Route>
		</Routes>
	);
};

export default App;
