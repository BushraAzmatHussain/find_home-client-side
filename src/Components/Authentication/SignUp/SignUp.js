import React from 'react';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigate = useNavigate();


    let signInError;

    if (user || gUser){
        console.log(user || gUser);
    }

    if(loading || gLoading || updating){
      return <Loading></Loading>
    }
    if(error || gError ||updateError){
      signInError = <p className='text-red-600'><small>{error?.message || gError?.message ||updateError?.message}</small></p>
    }

    const onSubmit = async data =>{
     await createUserWithEmailAndPassword(data.email, data.password);
     await updateProfile({ displayName: data.name });
     console.log('update done');
     navigate('/rent');
    }

    return (
        <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
              <img src="https://i.ibb.co/1f1Rg9v/6300250.jpg" alt="" />
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
              <h1 className='text-center font-extrabold text-4xl text-emerald-800'>Sign Up</h1>
                  <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                type="text" 
                placeholder="Your Name" 
                className="input input-bordered" 
                {...register("name", { 
                  required: {
                      value: true,
                      message: 'Name is required'
                  }
                 })} 
                />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
              </div>


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
            <input type="submit" value="Sign Up" className='btn btn-outline btn-success font-bold w-full max-w-xs' />
          </form>
      
      
          <div className="form-control">
                
                <label className="label">
                  <p className="label-text-alt link link-hover font-bold">Already have an account?   <Link  to="/signIn" className='text-gray-500 mx-2'> Please Sign In</Link></p>
                </label>
              </div>
              <div>
              <div className="divider">OR</div>
              <button onClick={() => signInWithGoogle()}
               className="btn btn-success font-bold w-full max-w-xs hover:text-white  ">Continue with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;