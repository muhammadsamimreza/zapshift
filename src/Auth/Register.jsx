import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome to Zapshift</h1>
            <h1>Register Now</h1>
          </div>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
