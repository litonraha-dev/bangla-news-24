
'use client'
import { authClient } from "@/src/lib/auth-client";
import React from "react";

const SignUpPage = () => {
  const onSubmit = async(e) => {
e.preventDefault()
const formData = new FormData(e.target)
const user = Object.fromEntries(formData.entries())
const {data, error}= await authClient.signUp.email({
    ...user,
    callbackURL:'/'
})
if(data){
    console.log(data);
}
if(error){
    console.log(error)
}

console.log(user, "from signup");
  };
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-center font-bold text-red-600 mb-5">
        সাইন আপ
      </h2>
     <form onSubmit={onSubmit}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="Your Name" />

        <label className="label">Email</label>
        <input type="email" name="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" name="password" placeholder="Password" />

        <button className="btn bg-red-700 mt-4 text-white" type="submit">SignUp</button>
      </fieldset>
     </form>
    </div>
  );
};

export default SignUpPage;
