import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "../styles.css";


const Users = () => {
    const context = useContext(SocketContext);
    return (
        <div className="Userlist" id='users'>
            <h1  style={{fontSize:25, color:"green"}}>Random Online Users</h1>
            <p  style={{fontSize:20}}>Talk to random people</p>
            <div className="user-list">
            {
                Object.keys(context.users).length===1 && 
                <div>
                    <p  style={{fontSize:20}}>Uh oh! no users online</p>
                    <p  style={{fontSize:20}}>Try opening the link in one more tab to talk to your self!</p>
                </div>
            }
            {
            Object.keys(context.users).length!==1 && Object.keys(context.users).map(key => {
            if (key === context.yourID) {
                return null;
            }
            return (
                <>
                    <button style={{fontSize:20, height:45}} onClick={() => context.callUser(key)}>Call {key}</button>
                    <br />
                </>
            );
            })};
            </div>
        </div>
    );
};

export default Users;