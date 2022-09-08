import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<AnimatedRoutes />
			<Footer />
		</div>
	);
}

export default App;
