import 'bootstrap/dist/css/bootstrap.min.css' 
import './css/reset.css';
import './css/style.css';
import { useState } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Search from './components/Search';

function App() {

	const [isActive, setActive] = useState('false')
	
	function searchToggle() {
		setActive(!isActive)
	}
	
	return (
		<>
			<Search isActive={isActive} />
			<Header searchToggle={searchToggle} />
			<MobileNav searchToggle={searchToggle} />
		</>
	);
}

export default App;
