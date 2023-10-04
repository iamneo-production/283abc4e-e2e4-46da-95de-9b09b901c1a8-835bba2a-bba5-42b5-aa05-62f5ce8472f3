import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './DashBoard.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageTrainsition from '../PageTransition/PageTrainsition';

const Dashboard = () => {
  const navigate = useNavigate();
  const [animateOutlet, setAnimateOutlet] = useState(false);

  useEffect(() => {
    if (animateOutlet) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.outlet-container',
        { webkitFilter: 'blur(3px)' },
        { webkitFilter: 'blur(0px)', duration: 1.2 ,delay: 0.5}
      );
    }
  }, [animateOutlet]);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="sidebar-links">
          <div onClick={() => navigate('myaccount')} className='tabs'>Home</div>
          <div onClick={() => navigate('projects')} className='tabs'>Players</div>
          <div onClick={() => navigate('/terms')} className='tabs'>Terms and conditions</div>
          <div onClick={() => navigate('/privacy')} className='tabs'>Privacy</div>
          <div onClick={() => navigate('/faq')} className='tabs'>FAQ</div>
          <div onClick={() => navigate('/login')} className='tabs'>Logout</div>
        </div>
      </div>
      <div className={`outlet-container ${animateOutlet ? 'animate' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
