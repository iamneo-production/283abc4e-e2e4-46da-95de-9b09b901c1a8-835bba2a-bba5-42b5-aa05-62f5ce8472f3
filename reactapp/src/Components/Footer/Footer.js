import React from 'react'
import './Footer.css';
import LoadingPage from '../LoadingPage/LoadingPage';

function Footer() {
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <h3>DUBAI</h3>
                    <p>
                    City: Sharjah
                    State/province</p>

                </div>
                <div>
                    <h3>LONDON</h3>
                    <p>9117 North Road
                    London</p><p>
                    SW39 1SV</p>
                </div>
                <div>
                <h3>For further information</h3><h3> signup</h3>         
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2023 TALLIER GOVT</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);