import { Prac1 } from './prac/Prac1';
import { Text } from './prac/Text';
import { User } from './types/User';
import { UserProfile } from './UserProfile';

const user :User = {
  name: "name",
  hobbies: ["game", "football"]
}

const user2 :User = {
  name: "name"
}

function App() {
  return (
    <div className="App">
      <Text color='red' fontSize='68'>연습장입니다</Text>
      <UserProfile user={user}/>
      <UserProfile user={user2}/>
      <Prac1 />
    </div>
  );
}

export default App;
