import 'bootstrap/dist/css/bootstrap.min.css' 
import './css/reset.css';
import './css/style.css';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Search from './components/Search';

function App() {
  return (
    <>
		<Search />
		<Header />
		<MobileNav />
    </>
  );
}

export default App;
