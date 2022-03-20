import React from 'react'
import ChatMessages from './ChatMessages';

export const Chat = () => {
    return (
        <div style={{ fontFamily: "cursive", color: "#333", width: "80%", marginLeft: "10%", height: '100vh' }} >
            <br /><br /><br /><br /><br />
            <div style={{ display: "flex", flexDirection: "row", alignContent: "stretch", justifyItems: "start" }}>
                <div style={{ width: "25%" }}>
                    <div style={{ display: "grid", minHeight: "73vh", maxHeight: "73vh", overflowY: "scroll", border: "1px solid rgba(0,0,20,.33", borderRadius: "5px" }}>
                        <div>
                            <div style={{ padding: "15px", backgroundColor: "#cdcdcd" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Gordon Ramsay😎😎
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px" }}>
                                    <b>9+ new messages - 3 days ago</b>
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Joe Bastianich👑
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px", color: "rgba(51, 51, 51, .6)" }}>
                                    Seen
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Graham Elliot
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px" }}>
                                    <b>2+ new messages - 1 day ago</b>
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Luca Manfé 🥇💍✨
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px", color: "rgba(51, 51, 51, .6)" }}>
                                    Seen
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Christine Hà
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px" }}>
                                    <b>LOL - 2 hours ago</b>
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                    Courtney Lapresi
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px", color: "rgba(51, 51, 51, .6)" }}>
                                    Seen
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: "15px" }}>
                                <h4 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "18px", fontWeight: "bold", lineHeight: "24px" }}>
                                </h4>
                                <h5 style={{ marginTop: "10px", marginBottom: "10px", fontSize: "14px", fontWeight: "bold", lineHeight: "20px", color: "rgba(51, 51, 51, .6)" }}>
                                </h5>
                            </div>
                            <div style={{ height: "0.25%", background: "rgba(0, 0, 20, .34)" }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "0.25%", background: "rgba(51,51,51,.37)" }}></div>
                <ChatMessages />
            </div>
        </div >
    )
}

export default Chat;