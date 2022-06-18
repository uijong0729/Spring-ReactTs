import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/atoms/molecules/SearchInput';
import { UserCard } from './components/atoms/organisms/user/UserCard';

function App() {
  return (
    <div className="App">
      <p>home</p>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>검색</SecondaryButton>
      <br /><br /><br />
      <SearchInput>검색</SearchInput>

      <UserCard />
    </div>
  );
}

export default App;
