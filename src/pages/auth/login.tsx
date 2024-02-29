import React from "react";
import { useFormik } from "formik";
import { useAuthStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../../api/authApi";
import UseToast from "../../utilities/useToast";

const login = () => {
  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(SignIn, {
    onSuccess: (data: any) => {
      console.log(data, "data");

      if (data?.status) {
        setUser(data?.data);
        setToken(data?.token);
        UseToast(data?.message);
        navigate("/dashboard");
      }
    },
    onError: (error: any) => {
      UseToast(error?.message, "error");
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        const Data = {
          ...values,
          lat: 11116,
          lng: 33336,
          device_token: "apmxqwioncxmqwd1dwqd",
          device_type: "web",
        };
        mutate(Data);
      },
    });
  return (
    <div>
      <div className="bg-black text-white w-full h-[60px] text-lg">
        <p className="ml-5 pt-4">Hybrid Taxi</p>
      </div>
      <form
        className="flex flex-col h-auto md:h-screen justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="p-3 space-y-3 w-auto md:w-96">
          <h1 className="items-center my-3 font-40 text-xl md:text-2xl">
            What's your email & password?
          </h1>
          <div>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Enter your email"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>
          {isLoading ? (
            <div>
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded-md "
              >
                Loading...
              </button>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default login;
