import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Login = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power1.out", delay: 0.2 }
    );
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-10 bg-white">
      {/* Left: Form with animation */}
      <div ref={formRef} className="w-[80%]">
        <form>
          <div className="card bg-base-100 shadow-2xl p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-sm text-gray-500">Login Now</p>
            </div>

            <div className="card-body gap-3">
              <fieldset className="fieldset gap-2">
                <label className="label font-semibold">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                />

                <label className="label font-semibold">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                />

                <div>
                  <a className="link link-primary text-sm">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-3 w-full">Login</button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
