import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './views/SearchPage';
import MainPage from './views/MainPage';

/*the app divided into two views and each view have specific components functionality
  -<MainPage />
  -<searchPage />
*/
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<MainPage/>} />
        <Route exact path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
