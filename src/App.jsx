import React, { useEffect, useState, createContext } from 'react';
import HomePage from './pages/home/HomePage';
import NavBar from './components/nav-bar/NavBar'

export const Data = createContext();
export const FetchState = createContext();

const App = () => {
  const [coursesData, setCoursesData] = useState({});
  const [fetched, setAsFetched] = useState(false);

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
          <NavBar />
          <HomePage />
        </FetchState.Provider>
      </Data.Provider>
    </div>
  );
}

export default App;