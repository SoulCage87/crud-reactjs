import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Users from './components/Users';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users></Users>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
