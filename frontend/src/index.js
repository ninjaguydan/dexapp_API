import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './css/style.css';
import App from './App';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Search from './components/Search';
import SearchBtn from './components/buttons/SearchBtn';
import Login from './components/pages/Login';
import { BrowserRouter as MyRouter, Route, Switch } from 'react-router-dom';

function Router() {
	const [isActive, setActive] = useState('false')
	const searchBtn = (
		<SearchBtn searchToggle={searchToggle} />
	)
	function searchToggle() {
		setActive(!isActive)
	}
	return(
		<MyRouter>
			<Search isActive={isActive} />
			<Header searchBtn={searchBtn} />
			<MobileNav searchBtn={searchBtn} />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/login" component={Login} />
			</Switch>
		</MyRouter>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


