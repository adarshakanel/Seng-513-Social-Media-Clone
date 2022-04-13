import React, { useEffect, useContext } from 'react'
import {useState } from 'react'
import AppContext from '../context/AppContext';
import axios from "axios";


function Contacts({contacts, currentUser, changeChat, id}) {
    
    const [username, setUsername] = useState(undefined);
    const [chat, setChat] = useState(undefined);
    const {userInfo } = useContext(AppContext)
    const [friends, setFriends] = useState([])
    const [isTrue, setisTrue] = useState(false)
    const rest = contacts.filter(item =>{
        return item._id === id;
     })
     
        useEffect(() => {
            axios.get("http://localhost:5000/user/message/" + userInfo.userId).then(
        (response)=>{
          setFriends(response.data.following);
          console.log(friends)
          console.log("this is the id" + id)
          if (id === ("localhost:3000/user/chat")){
              setisTrue(false)
          } else{
            setisTrue(true)
            
        }
          console.log("setisTrue: " + isTrue)
          
    })
        if (currentUser) {
            currentUser._id = userInfo.userId;
            currentUser.username = userInfo.fullName;
            setUsername(currentUser.username)
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => {
        setChat(index);
        changeChat(contact)
        console.log(contact);
        console.log(currentUser)
        //console.log(userInfo)

    }
    

  return (
    <>
    {
        username &&(
            <div style={{display: "grid",
              gridTemplateRows: "10% 90%",
              overflow: "hidden",
              backgroundColor: "#cdcdcd"}}>
                <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
                    <h3>CONTACTS</h3>
                </div>
                      <div style={{
                          display: "flex",
    width:'100%',
    flexDirection: "column",
    overflow: "auto",
    gap: "0.8rem"}}>
                    
                    <div>
                    {(() => {
                        if (id === ("localhost:3000/user/chat")) {
                        return (
                            contacts.map((contact,index)=>{
                                if (true)
                                console.log(contact._id)
                                console.log(contact._id)
                                console.log(contact._id)
                                console.log(contact._id)
    
                                console.log(userInfo.id)
                                console.log(userInfo.id)
                                console.log(userInfo.id)
                                console.log(friends)
                                    if(friends.includes(contact._id)){
                                        return(
                                            <div className='border' style={{backgroundColor: "#ffffffff",
                                            height: "5rem",
                                            cursor: "pointer",
                                            width: "100%",
                                            // marginLeft: "-50%",
                                                borderRadius: "1rem",
                                            padding: "1rem",
                                            display: "flex",
                                                alignItems: "center",
                                                justifyContent:'center'
                                            }} onClick={() => changeCurrentChat(index, contact)}>
                                                <div >
                                                    <h3>{contact.username}</h3> </div>
                                            </div>
                                        )
                                    }
                            })
                        )
                        } else {
                        return (
                            rest.map((contact,index)=>{
                                if (true)
                                console.log(contact._id)
                                console.log(contact._id)
                                console.log(contact._id)
                                console.log(contact._id)
    
                                console.log(userInfo.id)
                                console.log(userInfo.id)
                                console.log(userInfo.id)
                                console.log(friends)
                                    if(friends.includes(contact._id)){
                                        return(
                                            <div style={{backgroundColor: "#ffffffff",
                                            height: "5rem",
                                            cursor: "pointer",
                                            width: "100%",
                                            marginLeft: "-50%",
                                            borderRadius: "1rem",
                                            padding: "1rem",
                                            display: "flex",
                                            alignItems: "center"}}  onClick={()=>changeCurrentChat(index, contact)}>
                                                <div >
                                                    <h3>{contact.username}</h3> </div>
                                            </div>
                                        )
                                    }
                            })
                        )
                        }
                    })()}
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Contacts