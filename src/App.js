import logo from './logo.svg';
import './App.css';
import profileImage from './img/Kitten-Blog.jpeg'

function App() {
  return (
    <div className="App">
        <h1>Squie game</h1>
        <img src={profileImage} alt="profile-image" className="cat" />
    </div>
  );
}

export default App;
