import React from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
      if (user || gUser){
        navigate(from, {replace: true });
    }
    }, [user, gUser, from, navigate])

    if(loading || gLoading){
      return <Loading></Loading>
    }
    if(error || gError){
      signInError = <p className='text-red-600'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = (data) =>{
     console.log(data);
     signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className="hero min-h-screen bg-green-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img src="https://i.ibb.co/1f1Rg9v/6300250.jpg" alt="" />
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <h1 className='text-center font-extrabold text-4xl text-emerald-800'>Sign In</h1>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          placeholder="email" 
          className="input input-bordered" 
          {...register("email", { 
            required: {
                value: true,
                message: 'Email is required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid email'
            }
           })} 
          />
          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
        </div>


            <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          placeholder="password" 
          className="input input-bordered" 
          {...register("password", { 
            required: {
                value: true,
                message: 'Password is required'
            },
            minLength: {
                value: 6,
                message: 'Must be 6 characters or longer'
            }
           })} 
          />
          <label className="label">
            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
      
      {signInError}
      <input type="submit" value="Login" className='btn btn-outline btn-success font-bold w-full max-w-xs' />
    </form>

    <div className="form-control">
          
          <label className="label">
            <p className="label-text-alt link link-hover text-sky-800 font-bold"><Link  to="/signUp">Create New Account</Link></p>
          </label>
        </div>


        <div>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()}
         className="btn btn-success hover:text-white font-bold w-full max-w-xs">Continue with Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default SignIn;
