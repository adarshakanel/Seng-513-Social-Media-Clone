import React from 'react'
import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { allusers, host } from "../utils/APIRoutes";
import Contacts from "./Contacts";
import ChatContainer from "./ChatContainer";
import {io} from "socket.io-client"

function Chat() {
    const socket = useRef();
    const goto = useNavigate();
    const [contactList, setContactList] = useState([]);
    const [username, setUsername] = useState(undefined);
    const [chat, setChat] = useState(undefined);
    const url = window.location.href.slice(-24);  
    console.log(url)


    async function fetchDataTwo() {
        if(!localStorage.getItem('chat-app-user')){
            goto("/loginTwo");
        } else  {
            setUsername(await JSON.parse(localStorage.getItem('chat-app-user')));
        }
      }
    
      useEffect(() => {
        fetchDataTwo();
    }, []);

    useEffect(() => {
      if (username) {
        socket.current = io(host);
        socket.current.emit("setuser", username._id);
      }
    }, [username]);

    async function fetchData() {
        if(username){
          const data = await axios.get(`${allusers}/${username._id}`);
        setContactList(data.data);
        }
      }
    
      useEffect(() => {
        fetchData();
    }, [username]);
    
    const handleChatChange= (chat) => {
        setChat(chat);
    };

  return (
    <>
    <div style={{height: "100vh",
width: "100vw",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
backgroundColor: "white"}}>
        <div style={{height: "100vh",
  width: "80vw",
  display: "grid",
  gridTemplateColumns: "20% 80%"}} >
            <Contacts contacts={contactList} currentUser={username} changeChat={handleChatChange} id={url}  style={{width: '100%'}}>
            </Contacts>
            <ChatContainer currentChat={chat} currentUser={username} socket={socket}/>
        </div>
    </div>
    </>
  )
}


export default Chat