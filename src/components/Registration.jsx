import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { registerUser, login } from "../store/slices/authSlice";
import { Input, Button, Image } from "../components/index";
import { useForm } from "react-hook-form";

function Registration() {
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegistration = (userDetails) => {
    if (userDetails) {
      console.log("USERR DETAILSSSS", userDetails);

      dispatch(registerUser(userDetails))
        .unwrap()
        .then((response) => {
          console.log("RESSSSSSS", response);

          const creds = {
            email: response.email,
            password: response.password,
          };
          dispatch(login(creds))
            .unwrap()
            .then((res) => {
              console.log("REGISTERRED USER", res);
              navigate("/");
            });
        });
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-black text-white items-center justify-center">
      <form
        onSubmit={handleSubmit(userRegistration)}
        className="border-2 border-white p-8"
      >
        <Input
          label="UserName"
          type="text"
          className="w-full sm:w-96 bg-gray-500 mb-3"
          {...register("userName", { required: true })}
        />

        <Input
          label="Email"
          type="email"
          className="w-full sm:w-96 bg-gray-500 mb-3"
          {...register("email", { required: true })}
        />

        <Input
          label="FullName"
          type="text"
          className="w-full sm:w-96 bg-gray-500 mb-3"
          {...register("fullName", { required: true })}
        />

        <Input
          label="Password"
          type="password"
          className="w-full sm:w-96 bg-gray-500 mb-3"
          {...register("password", { required: true })}
        />

        <div className="flex flex-col border-white border-2 w-full sm:w-96">
          <Input
            label="Avatar"
            type="file"
            capture="environment"
            placeholder="Upload an image"
            control={control}
            className="w-full "
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("avatar", { required: true })}
          />

          <Input
            label="CoverImage"
            type="file"
            control={control}
            className="w-full"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("coverImage", { required: true })}
          />
        </div>
        <Button className="w-full mt-4" type="submit">
          Submit form
        </Button>
      </form>
    </div>
  );
}

export default Registration;
