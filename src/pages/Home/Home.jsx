import { AuctionArea, Carousel, Users } from '../../components';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Home.scss';

const socket = io();
socket.emit('join', JSON.parse(localStorage.getItem('user')).displayName);

const Home = () => {
  const [obj, setObj] = useState({ name: '', amount: 0 });
  const [users, setUsers] = useState([]);
  socket.on('success', users => setUsers(users));

  // useEffect(() => {
  //   socket.on('connected', () => {
  //     socket.emit('user', JSON.parse(localStorage.getItem('user')).displayName);
  //   });

  //   socket.on('user', user => {
  //     setUsers(prev => [...prev, user]);
  //   });
  // }, []);
  return (
    <div className='app__home'>
      <div className='app__home-container'>
        <Carousel />
        <div className='home__flexbox'>
          <AuctionArea setObj={setObj} obj={obj} socket={socket} />
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};
export default Home;
