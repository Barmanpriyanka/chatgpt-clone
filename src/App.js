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
             <div className="chat">
             <img className='chatImg' src={userIcon} alt=""/> <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec eleifend metus. Nullam id bibendum purus. Aenean convallis, arcu id dictum tempus, odio justo dapibus ligula, nec convallis purus urna at eros. Donec suscipit est at tincidunt consequat. Nulla facilisi. Sed hendrerit est vel felis cursus, et consectetur orci rhoncus.</p>
             </div>

             <div className="chat bot">
              <img className='chatImg' src={gptImgLogo} alt=""/> <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra arcu a magna tempus, non vulputate magna lacinia. Integer euismod tortor nec odio pretium, vel sodales erat tempor. Vivamus gravida, libero non tincidunt posuere, lacus nisi vestibulum metus, in faucibus orci justo et odio. Nullam sit amet interdum ex. Mauris sit amet libero convallis, lacinia nunc ut, dapibus velit. Curabitur vel lorem a ipsum venenatis faucibus. Donec condimentum turpis ut nisi fringilla, et tincidunt libero facilisis. Nam nec risus at est tempor ultricies in a erat. Praesent sed malesuada ex. Ut vehicula ipsum ut nisi malesuada, in suscipit justo interdum. Phasellus ac orci ac tortor tincidunt faucibus. Vestibulum ut libero suscipit, laoreet odio et, laoreet purus. Cras et nunc vitae magna elementum dignissim. Aliquam erat volutpat. Sed quis tincidunt mauris, eu dignissim dui.</p>
             </div>

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
