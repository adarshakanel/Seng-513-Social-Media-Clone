import React, { useEffect, useRef } from 'react'
import {useState } from 'react'
import styled from "styled-components"
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {getMsg, sendMsg}  from "../utils/APIRoutes"
import  {v4 as uuidv4}  from "uuid"
function ChatContainer({currentChat, currentUser, socket}) {
  const goto = useNavigate();
    const handleClick = async () =>  {
        localStorage.clear();
        goto("/loginTwo")
    }   
    console.log(currentChat);
    const [messages, setMessages] = useState([])
    const [messageReceive, setMessageReceive] = useState(null)
    const scroll = useRef();
    const [msg, setMsg] = useState("");
    const sendChat =  (e) => {
        e.preventDefault();
        if (msg.length >0){
            handleSendMsg(msg)
            setMsg("")
        }
    }

    async function fetchData() {
        if (currentChat){
            const response = await axios.post(getMsg,  {
                from: currentUser._id,
                to: currentChat._id,
            });
            setMessages(response.data);
        }
      }
    
      useEffect(() => {
        if(currentChat){
        fetchData();
        }
    }, [currentChat]);

    const handleSendMsg =  async (msg) =>{
          await axios.post(sendMsg, {
            from: currentUser._id,
            to: currentChat._id,
            message: msg,
          });
          socket.current.emit("send", {
            to: currentChat._id,
            from: currentUser._id,
            message: msg,
          });
        const msgs = [...messages];
    msgs.push({ sentByMe: true, message: msg });
    setMessages(msgs);
    
  };

    useEffect(() => {
        if (socket.current) {
          socket.current.on("receive", (msg) => {
            setMessageReceive({ sentByMe: false, message: msg });
          });
        }
      }, [socket.current]);

    useEffect(() => {
        messageReceive && setMessages((prev) => [...prev, messageReceive]);
      }, [messageReceive]);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

  return (
    <>
    {currentChat && (<Container>
        <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
            <div>
                <div style={{color: "black"}}>
                    <h1>{currentChat.username}</h1>
                </div>
            </div>
            <button style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"}} onClick={handleClick}>
          <span>Logout</span>
        </button>
        </div>
        <div style={{margin: "1rem",
    border: "5px solid rgba(0,0,0,.2)",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    overflow: "auto"}} >
            {
                messages.map((message) => {
                    return (
                        <div ref={scroll} key={uuidv4()}>
                            <div style={{display: "flex",
      alignItems: "center"}}className={`${message.sentByMe ?  "sended": "recieved"}`}>
                                <div style={{maxWidth: "45%",
        overflowWrap: "break-word",
        padding: "1rem",
        fontWeight: "bold"}}  className="content">
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
                
            }
        </div>
        <div  style={{display: "grid",
    alignItems: "center",
    gridTemplateColumns: "95% 5%",
    backgroundColor: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem"}}>
            <form style={{border: "3px solid rgba(0,0,0,.2)",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "2rem"}} onSubmit={(event) => sendChat(event)}>
        <input
        style={{width: "90%",
          height: "60%",
          backgroundColor: "transparent",
          color: "black",
          border: "none",
          paddingLeft: "1rem",
          fontSize: "1rem",
          outline: "none"}}
          type="text"
          placeholder="message goes here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button style={{padding: "0.3rem 2rem",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9a86f3",
        border: "none"}} type="submit">
          SEND
        </button>
      </form>
        </div>
    </Container>)
        
        }
    </>
  );
}

const Container = styled.div`
  display: grid;
  background-color: white;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
    
    
    
    .sended {
      justify-content: flex-end;
      .content {
        border-radius: 1rem;
        border-top-right-radius:0px;
        color: #d1d1d1;
        background-color: #4460FF;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        color: black;
        border-radius: 1rem;
        border-top-left-radius:0px;
        background-color: #A9A9A9;
      }
    }
  
`;


export default ChatContainer