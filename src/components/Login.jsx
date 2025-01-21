import React, { useState } from "react";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, getCurrentUser } from "../store/slices/authSlice";
import Cookies from "js-cookie";
function Login() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = (data) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };
    if (data) {
      const response = dispatch(login(credentials))
        .unwrap() // Optional: Use to handle resolved/rejected values directly
        .then((response) => {
          console.log("Login successful:", response);
          const accessToken = response.data.accessToken;
          Cookies.set("token", "Shantanu", { expires: 7, secure: true });
          const current = dispatch(getCurrentUser())
            .unwrap()
            .then((res) => {
              console.log("CURRRRR", res);
            });
          navigate("/");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  };
  return (
    // flex justify-center items-center w-full h-full bg-black ----  flex  border rounded-lg items-center justify-center text-white ----text-white space-y-2 w-full
    <div className="flex bg-black text-white w-full h-full justify-center items-start pt-40">
      <div className="border-2 p-2 rounded-sm border-purple-200">
        <form onSubmit={handleSubmit(handleLogin)} className="p-10">
          <div className="">
            <Input
              label="Email: "
              type="email"
              className="w-full sm:w-80 bg-gray-500 mb-2"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password: "
              type="text"
              className="w-full sm:w-80 bg-gray-500 mb-3"
              {...register("password", {
                required: true,
              })}
            />
            <div className="flex w-full">
              <Button className="border-2 w-full mt-2" type="submit">
                Sign in
              </Button>
            </div>
            {/* <Link to="/register" className="mt-1 text-blue-600">
              don't have any account?
            </Link> */}
          </div>
          <p className="mt-2 text-center text-base text-white">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
    // <div className="flex w-full bg-gray-950 h-screen text-white justify-center items-start">
    //   <div className="flex flex-col space-y-3 justify-center items-center border-2 border-slate-600 p-20 mt-20">
    //     <div className="flex items-center gap-1 mt-5">Login</div>

    //     <form onSubmit={handleSubmit(login)} className="py-2 pb-0">
    //       <div className="text-white ">
    //         <Input
    //           label="Email: "
    //           type="email"
    //           className="w-full sm:w-80"
    //           {...register("email", {
    //             required: true,
    //             validate: {
    //               matchPatern: (value) =>
    //                 /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    //                 "Email address must be a valid address",
    //             },
    //           })}
    //         />

    //         <Input
    //           label="Password: "
    //           type="text"
    //           className="w-full sm:w-80"
    //           {...register("password", {
    //             required: true,
    //           })}
    //         />

    //         <Button type="submit">Sign in</Button>
    //         {/* <Link to="/register" className="mt-1 text-blue-600">
    //           don't have any account?
    //         </Link> */}
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
