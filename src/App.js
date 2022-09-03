// import './App.css';
import CoursesBox from './components/coursesBox/CoursesBox';
import section from './courses';

function App() {
  return (
    <div className="App">
      <CoursesBox courses={section.courses} description={section.description} title={section.title}></CoursesBox>
    </div>
  );
}

export default App;

