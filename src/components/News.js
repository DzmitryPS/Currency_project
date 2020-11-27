import React, { Component } from 'react';
import NewsBlock from './newsComponents/newsBlock';
import NewsBlock2 from './newsComponents/newsBlock2';
import NewsBlock3 from './newsComponents/newsBlock3';
import NewsBlock4 from './newsComponents/newsBlock4';
import NewsBlock5 from './newsComponents/newsBlock5';
import NewsBlock6 from './newsComponents/newsBlock6';

import '../css/CryptoNews.css';

 class CryptoNews extends Component {
  render() {
    return (
      <div className='cryptoNews'>

        <div className='heading'>
          <h1 style={{color:'ivory'}}>Cryptocurrency News</h1>
        </div>

        <div className='news'>
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock2 /> </div> 
          <div className='newsBlock'> <NewsBlock3 /> </div> 
          <div className='newsBlock'> <NewsBlock4 /> </div> 
          <div className='newsBlock'> <NewsBlock5 /> </div> 
          <div className='newsBlock'> <NewsBlock6 /> </div>                  
        </div>

      </div>
    )
  }
}






export default CryptoNews;