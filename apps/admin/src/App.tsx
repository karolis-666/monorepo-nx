import { ExampleComponent } from '@Components';

// Trying to import .css file
import '@Theme/theme.css';

// Trying to import image file (.jpg)
import exampleImage from '@Assets/images/example.jpg';

export function App() {
  return (
    <div>
      <p style={{ fontFamily: 'Montserrat' }}>Testing</p>
      <ExampleComponent />
      <img src={exampleImage} alt="" />
    </div>
  );
}

export default App;
