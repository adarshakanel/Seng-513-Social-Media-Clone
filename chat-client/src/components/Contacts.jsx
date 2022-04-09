import React, { useEffect } from 'react'
import {useState } from 'react'
function Contacts({contacts, currentUser, changeChat}) {
    const [username, setUsername] = useState(undefined);
    const [chat, setChat] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setUsername(currentUser.username)
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => {
        setChat(index);
        changeChat(contact)
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
                <div style={{display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    gap: "0.8rem"}}>
                    {
                        contacts.map((contact,index)=>{
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