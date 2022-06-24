import './App.css';
import { SearchInput } from './components/atoms/molecules/SearchInput';
import { UserCard } from './components/atoms/organisms/user/UserCard';

const user = {
  name: "John hoge",
  img: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "asdfg12345@example.com",
  phone: "000-1111-2222",
  department: {
    name: "구매부",
    position: "대리"
  }
}

function App() {
  return (
    <div className="App">
      <SearchInput>검색</SearchInput>
      <UserCard user={user}/>
    </div>
  );
}

export default App;
