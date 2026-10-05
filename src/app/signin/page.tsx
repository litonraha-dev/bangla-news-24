import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <div className="mt-5">
         <h2 className='text-2xl text-center font-bold text-red-600 mb-5'>সাইন ইন</h2>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

         <Link href=''> <button className="btn bg-red-700 mt-4 text-white">SignIn</button></Link>
        </fieldset>
      </div>
    </div>
  );
};

export default SignInPage;
