import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Tweet/Header/Header';
import TweetBody from '../Tweet/Tweet-Body/TweetBody'

import './MainDivider.css'

const MainDivider = () => {
    return (
       <div className="main-container">
           <div className="menu-container">
               <Menu></Menu>
           </div>
           <div className="tweet-body-container">
              <Header></Header>
           <TweetBody></TweetBody>
           </div>
           <div className="trending-container"><h1>tranding dekho ekhane</h1></div>
       </div>
    );
};

export default MainDivider;