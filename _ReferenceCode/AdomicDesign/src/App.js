import './App.css';
import { UserProvider } from './page-providers/UserProvider';
import { MyRouter } from './page-router/MyRouter';

function App() {
  return (
    <UserProvider>
      <MyRouter/>
    </UserProvider>
  );
}

export default App;
