import React from 'react'
import Header from '../../components/header/Header'
import image1 from '../../assets/business_Img.webp'
import GridSection from '../../components/gridSection/GridSection'
import image2 from '../../assets/SmartNetwork-Cashout.jpg'
import image3 from '../../assets/Jappa-with-smartnetwork.jpg'
import image4 from '../../assets/The-new-movement-to-people.jpg'
import image5 from '../../assets/SmartNetwork-Raffle-Draw.jpg'
import FadedH1 from '../../components/fadedh1/FadedH1'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Telegram from '../../assets/Telegram.png'
import Whatsapp from '../../assets/WhatsApp.png'
import Instagram from '../../assets/Instagram.png'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <section className='home'>
      <section className="layer1">
        <div className="innerLayer">
          <div className="left">
            <h1>BE SMART CONNECT AND EARN</h1>
            <p>HEcash is an online/Network Marketing Community build to provide people with opportunity to take advantage of the internet and turn our everyday social media into a tool for Learning and Earning (i.e Having Skills and making passive income).</p>
          </div>
          <div className="right">
            <img src={image1} alt="" />
          </div>
        </div>
      </section>
      <GridSection>
      <div className="left">
        <h1>RELIABILITY AND COMMITMENT</h1>
        <p>We always delover what we promise, we invest in strong and long-lasting relationships. Our standards are uncompromising neither adulterate, so is our withdrawals and credits</p>
        <p>We are constantly looking for smart ways to support our customers, to get the most out of the collaboration and to achieve the best results.</p>
      </div>
      <div className="right">
        <img src={image2} alt="" />
      </div>
      </GridSection>
      <GridSection>
        <div className="right">
          <img src={image3} alt="" />
        </div>
        <div className="left">
          <h1>SMARTNETWORK IS FOR ALL</h1>
          <p>All that's typically neede, as an affiliate, is a passion for your niche, and strong persuasive and commitment to make a living through Networking</p>
          <p>For a business, HEcash offers a much-needed scale without accessing large advertising budgets. even one successful cashout can be much more better than a traditional marketing campaign or even a highly effective online advertising campaign.</p>
        </div>
      </GridSection>
      <section className='layer3'>
        <div className="innerLayer">
          <FadedH1><span>Marketing</span><h2>Affiliate Marketing</h2></FadedH1>
          <p>We're sure you've heard of this term before. It's essentially an advertising model in which we reward third-party individuals for generating traffic and leads for us. It is considered to be one of the simplest, yet one of the most profitable ways to Earn a living online through Networking. It dosen't require high startup costs or product development time because it mostly relies on the power of Content marketing such as blogs, ads, referrals and social media.</p>
        </div>
      </section>
      <section className='layer4'>
        <div className="innerLayer">
        <div className="left">
          <img src={image4} alt="" />
        </div>
        <div className="right">
          <h1>BENEFITS OF AFFILIATE MARKETING</h1>
          <p>There are many digital marketing strategies that you could use to grow financially. There are solutions such as content marketing, referral programs, email marketing, social media marketing, event sponsoring, influencer marketing, and many more.</p>
          <p>But the thing is, none of them offer as many benefits as affiliate marketing. And that’s simply because a good affiliate marketing program as SMARTNETWORK allows businesses to promote themselves on various levels, blending smoothly with other marketing strategies in a consistent way, and ensuring maximum results at the same time.</p>
        </div>
        </div>
      </section>
      <section className='layer5'>
        <img src={image5} alt="" />
      </section>
      <section className='layer6'>
        <div className="innerLayer">
        <FadedH1><span>Social Handles</span><h2>Connect With Us</h2></FadedH1>
        </div>
        <div className="innerLayer2">
          <div className="handle"><img src={Facebook} alt="" /></div>
          <div className="handle"><img src={Twitter} alt="" /></div>
          <div className="handle"><img src={Telegram} alt="" /></div>
          <div className="handle"><img src={Whatsapp} alt="" /></div>
          <div className="handle"><img src={Instagram} alt="" /></div>
        </div>
      </section>
    </section>
    </>
  )
}

export default Home