import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="logo-brand">
              <img src={gptLogo} alt="Logo" className="logo" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn">
              <img src={addBtn} alt="New chat" className="addBtn" /> New Chat
            </button>
          </div>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listitemsImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listitemsImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listitemsImg" /> Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <img src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="chats">
          <img src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.</p>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'></input> <button className="send"><img src={sendBtn} alt="Send" ></img></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places,orfacts.ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
