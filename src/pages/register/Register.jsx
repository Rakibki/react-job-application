import React, { useContext, useState } from "react";
import { useUserAuth } from "../../components/UserAuth";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(useUserAuth);
  const [erroe, setError] = useState(null);
  const [success, setCuccess] = useState(null);

  const handleRegister = (e) => {    
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // valodetion
    if (password.length < 6) {
      return setError("vai 6 ar beshi hote hobe");
    } else if (!/[A-Z]/.test(password)) {
      return setError("vai akta boro hater latter den");
    } else if (!/[0-9]/.test(password)) {
      return setError("vai akta sonkha den");
    }
    setCuccess("");
    setError("");
    console.log(name);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        updateProfile(user, {
            displayName: name
        })
          .then(() => {
            console.log("name added");
          })
          .catch((e) => {
            console.log(e.message);
          });

          sendEmailVerification(user)
          .then(() => {
            toast('check your email')
          })
          .catch((e) => {
            console.log(e.message);
          })

        setCuccess("successfully user Create");
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message)
      });
  };
  return (
    <div className="flex justify-center my-12">
       <ToastContainer />
      <form
        onSubmit={handleRegister}
        className="w-[60%] rounded-2xl bg-[#efefef] p-12"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name"
            required
            name="name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Accecp all tramps and condition
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {erroe && <p className="mt-4 text-red-400 font-semibold">{erroe}</p>}
        {success && (
          <p className="mt-4 text-green-500 font-semibold">{success}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
