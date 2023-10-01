import React, { useContext, useRef } from "react";
import Button from "../../utils/button/Button";
import { Link, Navigate } from "react-router-dom";
import { useUserAuth } from "../../components/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Login = () => {
  const { logInUser, singInWithGoogle, singInWidthGithub } = useContext(useUserAuth);
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        toast.success("successfuly user create");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your Mail");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleGoogleLogIn = () => {
    singInWithGoogle()
    .then((res) => {
      console.log(res.user);
      navigate("/");
    })
    .catch((e) => {
      console.log(e.message)
    })
  }

  const handleGithubLogin = () => {
    singInWidthGithub()
    .then(res => {
      console.log(res.user);
    })
    .catch((e) => {
      console.log(e.message);
    })
  }

  return (
    <div>
      <ToastContainer />
      <div className="hero py-16 bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <Link to={"/register"}>
                  <p className="hover:text-[#9999] mb-3 cursor-pointer font-semibold">
                    create a new account
                  </p>
                </Link>
                <Button type="submit" text={"Log in"}></Button>
              </div>
              <div className="flex mt-2 justify-center">
                <div className="flex gap-3">
                  <div onClick={handleGoogleLogIn} className="bg-red-300 cursor-pointer p-2 rounded-full"><BiLogoGoogle className=" text-white text-2xl" /></div>
                  <div onClick={handleGithubLogin} className="bg-red-300 cursor-pointer p-2 rounded-full"><AiFillGithub className=" text-white text-2xl" /></div>
                  <div className="bg-red-300 cursor-pointer p-2 rounded-full"><BsTwitter className=" text-white text-2xl" /></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
