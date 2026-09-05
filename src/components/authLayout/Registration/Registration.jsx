import React from 'react';
import { Link } from 'react-router';
import useDataPicker from '../../../customHooks/useDataPicker';
import { toast } from 'react-toastify';
import { createUsers } from '../../../Firebase/firebaseHandlers';

const Registration = () => {
    const [data, dataHandler, reset] = useDataPicker({
      name:'',
      url:'',
      email:'',
      password:'',
      checkbox:false
    });
    const registerHandler = (e)=>{
      e.preventDefault();
      if(!data.checkbox) {
        return toast.error('Please agree with our T&C',{
          position:'top-center'
        })
      } 
      else{
        createUsers(
          data.email, 
          data.password,
        data.name,
        data.url,
      )
        reset();
        toast.success(`Hey ${data.name.split(" ")[0]}! account created successfully!`)
      }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="pt-7 flex items-center justify-center">
        <h2>register your account</h2>
      </div>
      <div className="card-body">
        <form onSubmit={registerHandler} className="fieldset">
          <label className="label">Your name</label>
          <input
           onChange={(e)=> dataHandler(e.target.name, e.target.value)}
           name='name'
           type="text"
           className="input" 
           placeholder="your name" />
          <label className="label">photo URL</label>
          <input
           onChange={(e)=> dataHandler(e.target.name, e.target.value)}
           name='url'
           type="url" 
           className="input" 
           placeholder="your photo url" />
          <label className="label">Email</label>
          <input
           onChange={(e)=> dataHandler(e.target.name, e.target.value)}
           name='email'
           type="email" 
           className="input" 
           placeholder="Email" />
          <label className="label">Password</label>
          <input
           onChange={(e)=> dataHandler(e.target.name, e.target.value)}
           name='password'
           type="password" 
           className="input" 
           placeholder="Password" />
          <div className='space-x-2'>
          <label className="label"></label>
          <input
           onChange={(e)=> dataHandler(e.target.name, e.target.checked)} 
           name='checkbox'
           type="checkbox" 
           className="checkbox" 
           placeholder="Password" />
          <span className='link link-hover'>Accept Term & Conditions</span>  
          </div>
          <button type='submit' className="btn btn-neutral mt-4">register</button>
        </form>
      </div>
      <div className="flex flex-col px-4 space-y-2.5 pb-7">
        <h4 className="text-center">or</h4>

        {/* Google */}
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          register with Google
        </button>

        {/* GitHub */}
        <button className="btn bg-black text-white border-black">
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          register with GitHub
        </button>
        <span className="font-semibold text-center text-xs">
            already Have An Account ?
            <Link
             className="text-accent-secondary px-2"
             to={`/auth/login`}
             >
             login
             </Link>
        </span>
      </div>
    </div>
  );
};


export default Registration;

