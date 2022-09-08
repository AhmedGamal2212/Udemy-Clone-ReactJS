import React, { useEffect, useState, createContext } from 'react';
import HomePage from './pages/home/HomePage';
import NavBar from './components/nav-bar/NavBar'

export const Data = createContext();
export const FetchState = createContext();
export const SearchTermContext = createContext();
export const SetSearchTermContext = createContext();

const App = () => {
  const [coursesData, setCoursesData] = useState({});
  const [fetched, setAsFetched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      console.log('called')
      const getData = () => {
          fetch('https://api.npoint.io/97d7e0d71e507947a59f')
          .then(response => response.json())
          .then(jsonFile => {
              setCoursesData(jsonFile['data']);
              setAsFetched(true);
          });
      }
      getData();
  }, []);

  return (
    <div className="App">
      <Data.Provider value={coursesData}>
        <FetchState.Provider value={fetched}>
          <SearchTermContext.Provider value={searchTerm}>
            <SetSearchTermContext.Provider value={setSearchTerm}>
              <NavBar />
              <HomePage />
            </SetSearchTermContext.Provider>
          </SearchTermContext.Provider>
        </FetchState.Provider>
      </Data.Provider>
    </div>
  );
}

export default App;