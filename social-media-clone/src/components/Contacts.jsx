import React, { useEffect, useContext } from 'react'
import {useState } from 'react'
import AppContext from '../context/AppContext';

function Contacts({contacts, currentUser, changeChat, id}) {
    const [username, setUsername] = useState(undefined);
    const [chat, setChat] = useState(undefined);
    const {userInfo } = useContext(AppContext)
        useEffect(() => {
        if (currentUser) {
            if (id === "6252209d1333e8d67e9b0cca"){
                currentUser._id = "625220a91333e8d67e9b0cd0"
            } else {
                currentUser._id = "6252209d1333e8d67e9b0cca"
            }
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
    
    //if(id !== "6252209d1333e8d67e9b0cca"){
     //   currentUser._id = "625220a91333e8d67e9b0cd0"
    //} else{
    //    currentUser._id = "6252209d1333e8d67e9b0cca"
    //}

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
                <div style={{display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    gap: "0.8rem"}}>
                    {
                        contacts.map((contact,index)=>{
                            if (id !== undefined && contact._id === id && contact._id !== currentUser._id)
                                return(
                                    <div style={{backgroundColor: "#ffffffff",
                                    height: "5rem",
                                    cursor: "pointer",
                                    width: "85%",
                                    borderRadius: "1rem",
                                    padding: "1rem",
                                    display: "flex",
                                    alignItems: "center"}}  onClick={()=>changeCurrentChat(index, contact)}>
                                        <div >
                                            <h3>{contact.username}</h3> </div>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
    </>
  )
}

export default Contacts