import React, { useContext, useState, useEffect } from 'react';
import '../styles.css';
import { SocketContext } from '../SocketContext';
//material UI is not supported
// import { Grid, Typography, Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

const VideoPlayer = () => {
    const context = useContext(SocketContext);

    const [isPhoneScreen, setIsPhoneScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneScreen(window.innerWidth <= 998); // Adjust the screen width as needed
        };

        // Add a listener for window resize
        window.addEventListener('resize', handleResize);

        // Call it once to set the initial state
        handleResize();

        // Remove the listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={isPhoneScreen ? "mobile-videos" : "videos"} id='video'>
            {
                context.stream && (
                    <div style={{ width: "50%", height: "30%" }} className={isPhoneScreen ? "mobile-videosetting" : "videosetting"}>
                        <div className={isPhoneScreen ? "mobile-floatingName" : "floatingName"}>
                            <h3 style={{ fontSize: 20, marginTop:"10%"}}>{context.name || 'Name1'}</h3>
                        </div>
                        <video playsInline muted ref={context.myVideo} autoPlay className={isPhoneScreen ? "mobile-Video" : "Video"}></video>
                        <div className={isPhoneScreen ? "mobile-muteButton" : "muteButton"}>
                            {
                                !context.callMuted ? (
                                    <button style={{ fontSize: 20, justifyContent: "center" }} onClick={context.muteCall} className='button_b2' > Mute </button>
                                ) : (
                                    <button style={{ fontSize: 20 }} onClick={context.unMuteCall} className='button_b1' > Unmute </button>
                                )
                            }
                        </div>
                    </div>

                )
            }

            {
                context.callAccepted && !context.callEnded && (
                    <div style={{ width: "50%", height: "30%" }} className={isPhoneScreen ? "mobile-videosetting" : "videosetting"}>
                        <div className={isPhoneScreen ? "mobile-floatingName" : "floatingName"}>
                            <h3 style={{ fontSize: 20, marginTop:"10%" }}>{context.call.name || 'Name2'}</h3>
                        </div>
                        <video playsInline muted={context.callMuted} autoPlay ref={context.userVideo} className={isPhoneScreen ? "mobile-Video" : "Video"}> </video>

                    </div>
                )
            }
        </div>
    )
}
export default VideoPlayer