import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import CompanyExplorer from './pages/companyExplore';
import DetailItem from './pages/detailItem';
import Home from './pages/Home';

const App = () => {
	return (
		<Routes>
			<Route element={<Navigation />}>
				<Route path='/' element={<Home />} />
				<Route path='/work/:id' element={<DetailItem />} />
				<Route path='/companies' element={<CompanyExplorer />} />
			</Route>
		</Routes>
	);
};

export default App;
