import { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? "extended" : "collapsed"}`}>
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className={`bottom-item ${extended ? "recent-entry" : "close"}`}>
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className={`bottom-item ${extended ? "recent-entry" : "close"}`}>
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className={`bottom-item ${extended ? "recent-entry" : "close"}`}>
          <img className="text" src={assets.send_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
