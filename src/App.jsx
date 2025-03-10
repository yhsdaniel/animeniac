import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import DetailAnime from './pages/DetailAnime'

function App() {
	return (
		<Router>
			<Header />
			<div style={{ padding: '0 1rem' }}>
				<h2 style={{ textAlign: 'left' }}>Browse Anime</h2>
				<p style={{ textAlign: 'left' }}>Search thousands of anime by your favorite tags, genres, studios, years, ratings, and more!</p>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/page/:page" element={<MainPage />} />
				<Route path="/anime/:title" element={<DetailAnime />} />
			</Routes>
		</Router>
	)
}

export default App
