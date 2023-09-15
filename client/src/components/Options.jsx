import React, { useContext, useState } from 'react';
import { SocketContext } from '../SocketContext';
import { green, red } from '@material-ui/core/colors';

const Options = ({ children }) => {
    const context = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div>
            <div className='options'>
                <div className='option'>
                    <form noValidate autoComplete='off'>
                        <label style={{ fontSize: 25, fontWeight: "500", fontFamily: "roboto" }}>Set Your Name to be Displayed</label><br />
                        <input style={{ fontSize: 25, fontFamily: "roboto", borderRadius: 10, backgroundColor: "#FFF4F4", height: 40 }} type='text' label='Name' value={context.name} onChange={(e) => context.setName(e.target.value)} />
                    </form>
                    <br />
                    <h3 style={{ fontSize: 25, fontWeight: "600", color: "green" }}>Your ID: {context.me}</h3>
                    <p style={{ fontSize: 20, fontFamily: "roboto", fontWeight: "300" }}>Share this with your Friends so they can call you</p>
                </div>
                <div className='option'>
                    <form noValidate autoComplete='off'>
                        <label style={{ fontSize: 25, fontFamily: "roboto", color: "green" }}>Make A Call</label><br />
                        <input style={{ fontSize: 25, fontFamily: "roboto", borderRadius: 10, backgroundColor: "#FFF4F4", height: 40 }} type='text' label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    </form>
                    <br />
                    {
                        context.callAccepted && !context.callEnded ? (
                            <button style={{ fontSize: 25, fontFamily: "roboto", color: red }} onClick={context.leaveCall} className='button_b2'>Hang Up</button>
                        ) : (
                            <button style={{ fontSize: 25, fontFamily: "roboto", backgroundColor: green }} onClick={() => context.callUser(idToCall)} className='button_b1'>Call</button>
                        )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Options;