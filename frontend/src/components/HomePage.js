import React, { Component } from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from "./Room";
import { BrowserRouter as Router, Routes, Route, Redirect, Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/"></Route>
                <Route path="/create" element={<CreateRoomPage />} />
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/room/:roomCode" element={<Room />} />
            </Routes>
        </Router>
    )
}

export default HomePage;