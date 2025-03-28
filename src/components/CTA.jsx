import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
  <section className='cta'>
    <p className='cta-text'>Have a project in mind ? <br className='sm:block hidden'/>
    Lets build something together ! </p>
    <Link className='btn' to="/contact">
        Contact
    </Link>
  </section>
  )
}

export default CTA