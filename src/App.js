import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar navBar={props.state.navBar} />
        <div className="wrapper-content">
          <Routes>
            <Route path='/' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} />
            <Route exact path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} addMsg={props.addMsg} newMsg={props.state.dialogsPage.newMsg} onChangeMsg={props.onChangeMsg} />} />
            <Route exact path='/messages' element={<Dialogs dialogsPage={props.state.dialogsPage} addMsg={props.addMsg} newMsg={props.state.dialogsPage.newMsg} onChangeMsg={props.onChangeMsg} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

