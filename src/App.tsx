import { Header } from './components/Header';
import {
  GlobalStyle
} from './Global/global'
import { Dashboard } from './pages/Dashboard';


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle /> 
    </>
  );
}


