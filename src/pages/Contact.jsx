import React, { Suspense } from 'react';
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import  Fox  from '../models/Fox';
import  Loader  from '../components/Loader';
import Alert from '../components/Alert';
import useAlert from '../Hook/useAlert';
import Astronaut from '../models/Astronaut';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('float')

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('silly');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name:"Gareth",
        form_email:form.email,
        to_email:'contact@jsmastery.pro',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    ).then(()=>{
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully!', type: 'success'})
      //todo : show success message

      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('float');
        setForm({name:'', email:'', message:''});
      },[3000])
      
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('float');
      showAlert({show: true, text: 'I didnt receive your message', type: 'danger'})
      console.log(error);
      //todo : show error message
    });
  };

  const handleFocus = () => setCurrentAnimation('moonwalk');
  const handleBlur = () => setCurrentAnimation('float');


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
      <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit} ref ={formRef}>
        <label className='text-black-500 font-semibold'>
          Name
          <input type="text" name ="name" className="input" placeholder="John" required value={form.name}
          onChange = {handleChange}
          onFocus ={handleFocus}
          onBlur = {handleBlur}
          />
          </label>
          <label className='text-black-500 font-semibold'>
          Email
          <input type="email" name ="email" className="input" placeholder="John@gmail.com" required value={form.email}
          onChange = {handleChange}
          onFocus ={handleFocus}
          onBlur = {handleBlur}
          />
          </label>
          <label className='text-black-500 font-semibold'>
          Your Message
          <input  name ="message" rows={4} className="textarea" placeholder="Let me know how I can help you" required value={form.message}
          onChange = {handleChange}
          onFocus ={handleFocus}
          onBlur = {handleBlur}
          />
          </label>
          <button
          type="submit" 
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'send Message'}

          </button>
      </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position:[0,0,5],
            fov: 75,
            near:0.1,
            far:1000
          }}
        >

          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={1}/>

          <Suspense fallback={<Loader/>}>
            {/* <Fox
            currentAnimation={currentAnimation} 
            position ={[0.5,0.35,0]}
            rotation = {[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}/> */}
            <Astronaut
            currentAnimation={currentAnimation} 
            position ={[0.6,-2.5,1]}
            rotation = {[12.6,-0.6,0]}
            scale={[1.6,1.6,1.6]} />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Contact