import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link , btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link className='neo-brutalism-white neo-btn' to={link}>
        {btnText}
        <img src = {arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent ={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Gareth Geldenhuys</span> <br/> A Web Developer from South Africa.
        </h1>
    ),
    2: (
        <InfoBox
        text = "Let me tell you about me and who I am"
        link = "/about"
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
        text = "These are some of the cool things Ive Done"
        link = "/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
        text = "Lets Chat send me a message anytime"
        link = "/contact"
        btnText="Let's Talk"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo