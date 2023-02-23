import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import GlobalStyle from './styles/globalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
