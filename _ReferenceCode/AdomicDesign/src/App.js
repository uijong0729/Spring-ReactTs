import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SearchInput } from './components/atoms/molecules/SearchInput';
import { UserCard } from './components/atoms/organisms/user/UserCard';
import { DefaultLayout } from './components/atoms/page_template/DefaultLayout';
import { HeaderOnly } from './components/atoms/page_template/HeaderOnly';

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
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput>검색</SearchInput>
        <UserCard user={user}/>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
