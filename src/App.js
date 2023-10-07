import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import './styles/app.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
