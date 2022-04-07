import './AuctionArea.scss';
import { useTimer } from 'react-timer-hook';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let reStart = false;

const AuctionArea = ({ setObj, obj, socket }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')).displayName;
  const [bidAmount, setBidAmount] = useState(10000);
  const [bidder, setBidder] = useState('');
  const [isbidde, setIsbidde] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  const handleBid = () => {
    socket.emit('bid', { name: user, amount: bidAmount });
    console.log('bidded');
    setIsbidde(true);
  };

  if (isbidde) {
    setIsbidde(false);
    setBidAmount(prev => prev + 1000);
    setBidder(user);
    reStart = true;
  } else {
    socket.once('restart', ({ name, re, amount }) => {
      console.log('restarted');
      setBidder(name);
      reStart = re;
      setBidAmount(amount);
      return;
    });
  }

  const Timer = ({ expiryTimestamp, re }) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    const { seconds, minutes, restart } = useTimer({
      expiryTimestamp,
      autoStart: true,
      onExpire: () => {
        console.log('Countdown Finished');
        navigate('/success', { state: { message: bidder !== user ? 'You have lost the bid' : 'You have won the bid' } });
      },
    });
    if (reStart) {
      reStart = false;
      restart(time);
    }

    return (
      <>
        <h1>
          {minutes}:{seconds}
        </h1>
      </>
    );
  };

  return (
    <div className='app__auction'>
      <div className='app__auction-container'>
        <div className='info-container'>
          <div className='app__auction-title'>
            <h1>French Clock</h1>
          </div>
          <div className='app__auction-info'>
            <h3>Rs. {bidAmount}</h3>
            <h4>Current Bidder: {bidder}</h4>
            <h4>Next Bid: {bidAmount + 1000}</h4>
          </div>
          <div className='app__auction-button'>
            <button onClick={handleBid}>Bid now</button>
          </div>
        </div>
        <div className='timer-container'>
          <Timer expiryTimestamp={time} reStart={reStart} />
        </div>
      </div>
    </div>
  );
};
export default AuctionArea;
