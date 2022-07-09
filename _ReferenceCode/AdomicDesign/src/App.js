import { RecoilRoot } from 'recoil';
import './App.css';
import { UserProvider } from './page-providers/UserProvider';
import { MyRouter } from './page-router/MyRouter';

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <MyRouter/>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
