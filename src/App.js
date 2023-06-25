
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentReducer from './reducer/studentReducer';
import FormReducer from './reducer/formReducer';
function App() {
  return (
    <>
      <StudentReducer />
      <FormReducer />
    </>
  );
}

export default App;
