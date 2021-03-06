import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  const from = location.state?.from?.pathname || '/'
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [email,setEmail] = useState('')
const [token] = useToken(user || gUser)
  const { register, formState: { errors }, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    setEmail(data.email)
    signInWithEmailAndPassword(data.email,data.password)
  };
  useEffect(()=>{
    if (token) {
      navigate(from,{replace:true})
     }
  },[token,navigate,from])
  if(loading || gLoading){
    return <Loading/>
  }
  let signInError;
  if(error || gError){
    signInError = <p className="text-red-500">{error?.message || gError?.message}</p>
  }
  return (
    <div className='flex h-screen justify-center items-center'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
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
                {signInError}
                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                {
                error?.message.includes('Firebase: Error (auth/wrong-password)') && 
            <p className="text-sm">Forget password?<span className="btn btn-link btn-active btn-xs" onClick={async()=>{
                await sendPasswordResetEmail(email)
                toast('sent Email',{id:'sent'})
            }}>Reset password</span></p>
            }
            </form>
            <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
            >Continue with Google</button>
        </div>
    </div>
</div >
  );
};

export default Login;
