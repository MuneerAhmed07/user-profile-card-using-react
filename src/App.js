import UserProfileCard from './component/UserProfileCard';
import './App.css';

// import images
import image1 from "./Assests/p-1.png";
import image2 from "./Assests/p-2.png";
import image3 from "./Assests/p-3.png";

function App() {
  return (
    <div className="App">
     <div className="card-container">
      <UserProfileCard image={image1} name="Jacks" skill="Frontend developer" />
      <UserProfileCard image={image2} name="Amelia" skill="MERN Stack Developer" />
      <UserProfileCard image={image3} name="James" skill="Graphic Desinger" />
     </div>
    </div>
  );
}

export default App;
