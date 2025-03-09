import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './MainPage'
import Header from './components/Header'
import DetailAnime from './DetailAnime'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/page/:page" element={<MainPage />} />
				<Route path="/anime/:title" element={<DetailAnime />} />
			</Routes>
		</Router>
	)
}

export default App
