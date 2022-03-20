import React from 'react'
// import "../Chat.css"
export const ChatMessages = () => {
    return (
        <div style={{ width: "75%", borderBottom: "1px solid rgba(0,0,0,.24)", borderTop: "1px solid rgba(0,0,0,.24)", borderRadius: "1px", padding: "29px", paddingBottom: "0px", minHeight: "73vh", maxHeight: "73vh" }}>
            <h1 style={{ paddingBottom: "15px", fontSize: "23px", lineHeight: "44px", fontWeight: "bold", textAlign: "center" }}>
                Gordon Ramsay😎😎
            </h1>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", justifyItems: "end", border: "1px solid rgba(0,0,20,.33", borderRadius: "5px" }}>
                <div style={{ display: "grid", paddingBottom: "10px", paddingTop: "10px" }}>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            HI
                        </h4>
                    </div>
                    <div style={{ justifySelf: "start", backgroundColor: "darkgrey", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginLeft: "20px", borderTopLeftRadius: "0px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Hello
                        </h4>
                    </div>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Goodbye
                        </h4>
                    </div>
                    <div style={{ justifySelf: "start", backgroundColor: "darkgrey", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginLeft: "20px", borderTopLeftRadius: "0px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            bruh-
                        </h4>
                    </div>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            i said goodbye.
                        </h4>
                    </div>
                    <div style={{ justifySelf: "start", backgroundColor: "darkgrey", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginLeft: "20px", borderTopLeftRadius: "0px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Nvm
                        </h4>
                    </div>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Hello Again!
                        </h4>
                    </div>
                    <div style={{ justifySelf: "start", backgroundColor: "darkgrey", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginLeft: "20px", borderTopLeftRadius: "0px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Nah, goodbye-
                        </h4>
                    </div>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            Goodbye
                        </h4>
                    </div>
                    <div style={{ justifySelf: "end", backgroundColor: "#4460ff", paddingRight: "20px", paddingLeft: "20px", marginTop: "5px", marginRight: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                        <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", lineHeight: "24px", color: "white" }}>
                            REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        </h4>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", alignContent: "center", justifyItems: "space-between", paddingTop: "15px" }}>
                <form style={{ display: 'flex', flexDirection: "row", width: "100%", alignItems: "center" }}>
                    <label style={{ width: "100%", paddingTop: "auto" }}>
                        <input style={{ width: "100%", border: "1px solid rgba(0,0,20,.33", borderRadius: "15px" }} type="text" name="name" placeholder='  Message' />
                    </label>
                    <h4 style={{ paddingLeft: "15px", paddingRight: "15px" }}> + </h4>
                    <input style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "auto", paddingBottom: "auto", border: "1px solid rgba(0,0,20,.33", borderRadius: "5px" }} type="submit" value="Send" />
                </form>
            </div>
        </div>)
}

export default ChatMessages