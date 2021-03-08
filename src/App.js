import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <div className="app">
    <Router>

    <Switch>
      <Route exact path="/search">
      <SearchPage/>
      </Route>
      <Route exact path="/">
      <Home/>
      </Route>
    </Switch>

    </Router>
  
    </div>
  );
}

export default App;
