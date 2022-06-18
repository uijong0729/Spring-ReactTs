import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';

function App() {
  return (
    <div className="App">
      <p>home</p>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>검색</SecondaryButton>
    </div>
  );
}

export default App;
