import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1 style={{ fontSize: 25 }}>{call.name} is calling:</h1>
          <button style={{ fontSize: 25 }} onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;