"use client";
import React, { useState } from "react";
import Navigation from "./Header";
// import Footer from "./Footer";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useAuthStore from "@/zustand/auth.zustand";

function SignIn() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSignin = async (e: any) => {
    e.preventDefault();
    await Promise.all([login(formData)]);
    router.push("/");
  };

  return (
    <>
      {/* <Navigation /> */}
      <div className="flex min-h-[38.5rem] flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSignin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-black shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none focus:ring-offset-gray-100"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              onClick={() => router.push("/signup")}
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SignIn;
