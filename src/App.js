import './App.css';
import ChangeTitle from './components/ChangeTitle';
import ContactsPage from './contactsPage/ContactsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import CounterPage from './pages/counterPage/CounterPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage />
      <AboutPage />
      <ChangeTitle /> */}
      {/* <ContactsPage /> */}
      <CounterPage />
    </div>
  );
}

export default App;
