import { Header } from './components/Header';
import { CakeView } from './views/CakeView'
import { IceCreamView } from './views/IceCreamView'
import { UserView } from './views/UserView'

function App() {
  return (
    <div className="App">
      <Header />
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
