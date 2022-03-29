import React from "react";
import io from "socket.io-client";
import { useState, useEffect, useContext, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./../css/Chat.css";
import AppContext from "../context/AppContext";
import ReactDOM from 'react-dom';

const socket = io.connect("http://localhost:3001");

export const Chat = () => {
  const [message, setMessage] = useState();
  const [messageList, setmessageList] = useState([]);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  let friends = [
    { id: "1", name: "Gordon Ramsay😎😎" },
    { id: "2", name: "Joe Bastianich👑" },
    { id: "3", name: "Graham Elliot" },
    { id: "4", name: "Luca Manfé 🥇💍✨" },
    { id: "5", name: "Christine Hà" },
    { id: "6", name: "Courtney Lapresi" },
  ];
  const [friendsList, setFriendsList] = useState(friends);
  const { userInfo } = useContext(AppContext);

  const joinFriend = (item) => {
    //console.log(item.id);
    let element = <div id="idd" className="chat-body">
    <ScrollToBottom className="message-container">
      {messageList.map((e) => {
        return (
          <div
            className="message"
            id={username === e.from ? "you" : "other"}
          >
            <div>
              <div className="message-content">
                <p>{e.text}</p>
              </div>
              <div className="message-meta">
                <p id="time">{e.time}</p>
                <p id="author">{e.from}</p>
              </div>
            </div>
          </div>
        );
      })}
    </ScrollToBottom>
  </div>;
    ReactDOM.render(" ", document.getElementById('idd'));
    ReactDOM.render(element, document.getElementById('idd'));
    setRoom(item.id);
    enterRoom();


  };

  var renderFriends = friendsList.map((item) => (
    <div>
      <div style={{ padding: "15px", cursor: "pointer" }}>
        <h4
          onClick={() => joinFriend(item)}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            lineHeight: "24px",
          }}
        >
          {item.name}
        </h4>
        <h5
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            lineHeight: "20px",
            color: "rgba(51, 51, 51, .6)",
          }}
        >
          Seen
        </h5>
      </div>
      <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}></div>
    </div>
  ));

  const enterRoom = () => {
    socket.emit("join", room);
    setShowChat(true);
  };

  const send = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        from: username,
        text: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes() +
          ":" +
          new Date(Date.now()).getSeconds(),
      };
      await socket.emit("message", messageData);
      setmessageList((elements) => [...elements, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setmessageList((elements) => [...elements, data]);
    });
  }, [socket]);

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>chat</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Friend"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          ></input>

          <button onClick={enterRoom}>chat</button>
        </div>
      ) : (
        <div
          style={{
            fontFamily: "cursive",
            color: "#333",
            width: "80%",
            marginLeft: "10%",
            height: "100vh",
          }}
            >
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "stretch",
              justifyItems: "start",
            }}
          >
            <div style={{ width: "25%" }}>
              <div
                style={{
                  display: "grid",
                  minHeight: "73vh",
                  maxHeight: "73vh",
                  overflowY: "scroll",
                  border: "1px solid rgba(0,0,20,.33",
                  borderRadius: "5px",
                }}
              >
                {renderFriends}
                <div>
                  <div style={{ padding: "15px" }}>
                    <h4
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        lineHeight: "24px",
                      }}
                    ></h4>
                    <h5
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        lineHeight: "20px",
                        color: "rgba(51, 51, 51, .6)",
                      }}
                    ></h5>
                  </div>
                  <div
                    style={{
                      height: "0.25%",
                      background: "rgba(0, 0, 20, .34)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="chat-window">
              <div className="chat-header">
                <p>Gordon Ramsay😎😎</p>
              </div>
              <div  id= "idd" className="chat-body">
                <ScrollToBottom className="message-container">
                  {messageList.map((e) => {
                    return (
                      <div
                        className="message"
                        id={username === e.from ? "you" : "other"}
                      >
                        <div>
                          <div className="message-content">
                            <p>{e.text}</p>
                          </div>
                          <div className="message-meta">
                            <p id="time">{e.time}</p>
                            <p id="author">{e.from}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ScrollToBottom>
              </div>
              <div className="chat-footer">
                <input
                  type="text"
                  placeholder="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    e.key === "Enter" && send();
                  }}
                ></input>
                <button onClick={send}>send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
