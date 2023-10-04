import React from 'react';
import './MyAccount.css';
export default function MyAccount() {
  return (
    <div className="myaccount-main-content">
      <div className="myaccount-welcome">
        <h1>Welcome To Tallier</h1>
        <p>
          Here, you can effortlessly vote, stay updated on
          recent activities, and access various tools and features to enhance
          your experience.Our mission is to revolutionize the way people engage
           in the democratic process by providing a user-friendly, secure, and efficient 
           platform for online voting. We believe that technology can bridge the gap between
            citizens and their governments.
        </p>
      </div>
      <div className="myaccount-user-details">
        <h2>LINKS</h2>
        <div className="myaccount-user-inner">
          <p>INTERNATIONAL CRICKET COUNCIL UNDERTAKEN</p>
          <p>ICC.ingov@gmail.com</p>
        </div>
        <input type="button" value="Edit" />
      </div>
      <div className="myaccount-social">
        <h2>Social</h2>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <p>Instagram : </p>
            <p className="myaccount-links">
            https://www.instagram.com/oneVote
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>X : twitter </p>
            <p className="myaccount-links">
              https://www.twitter.com/oneVote
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>Youtube : </p>
            <p className="myaccount-links">
              https://www.youtube.com/oneVote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
