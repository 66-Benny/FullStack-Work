import React, { Component } from 'react'
import './style.css'

class Banner extends Component {
  render () {
    const { dark } =  this.props;
    const style = dark ? {backgroundImage: 'url(https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png)'} : null;
    return (
      <header className='banner' style={style}>
        <div className='banner__title'>
          <span className='banner__logo'/>
          <span className='banner__text'>吃喝玩乐，找优惠</span>
        </div>
        <div className='banner__btns'>
          <a className='banner__btn' href='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F42%2F70%2F5bef42f16bc2b.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620954574&t=1b8885c5c225e0628778500c62dbc77e'>打开餐饮娱乐</a>
          <a className='banner__btn banner__btn--bg' href='https://m.dianping.com/download/redirect?id=11186'>下载APP享特价</a>
        </div>
      </header>
    )
  }
}

export default Banner