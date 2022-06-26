import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
    const { roomCode } = useParams();
    const [state, setRoom] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false
    })

    useEffect(() => {

        const getRoomDetails = () => {
            fetch('/api/get-room' + '?code=' + roomCode)
                .then(
                    (response) => response.json()
                )
                .then(
                    (data) => {
                        setRoom({
                            votesToSkip: data.votes_to_skip,
                            guestCanPause: data.guest_can_pause,
                            isHost: data.is_host
                        })
                    }
                );
        }

        getRoomDetails();
    }, []);



    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes To Skip: {state.votesToSkip}</p>
            <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
            <p>Host: {state.isHost.toString()}</p>

        </div>
    )
}

export default Room;