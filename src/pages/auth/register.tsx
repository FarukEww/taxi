import React, { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { SignUp } from "../../api/authApi";
import { useRef } from "react";
import { useGeolocated } from "react-geolocated";
import { ImageUploadAPI } from "../../api/imageApi";
import { log } from "console";

const register = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const [userLocation, setUserLocation] = useState(null);

  const {
    mutate: ImageUpload,
    isError: iIsError,
    error: ierror,
  } = useMutation(ImageUploadAPI, {
    onSuccess(data: any) {
      console.log(data, "sdsad");
      console.log(data.url, "image");
      setPimage(data.url);
    },
  });

  const [pimage, setPimage] = useState("");
  const { mutate, isError, error } = useMutation(SignUp, {
    onSuccess(data: any) {
      console.log(data, " .................");

      // alert("Registration successfulr");
    },
    onError(error: any) {
      console.log(error, "error");
    },
  });

  const imageHandle = (event: any) => {
    // event.currentTarget.files[0]
    // const file = event.currentTarget.files[0];
    const file: any = event.target.files[0];

    console.log(file, "file");
    const formData = new FormData();
    const SetData: any = formData.append("image", file);
    console.log(SetData, formData, "setdata");
    ImageUpload(formData);
  };
  console.log(coords?.latitude, "sdas");
  console.log(coords?.longitude, "sds");

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile_no: "",
        dob: "",
        // profile_image: "",
        gender: "",
        address: "",
        // front_govid_card: "",
        // back_govid_card: "",
        // govid_expire: "",
        // id_proof: ""
      },
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        console.log("Values--", values);

        const formData = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          mobile_no: values.mobile_no,
          dob: values.dob,
          profile_image: pimage,

          gender: values.gender,
          address: values.address,
          lat: coords?.latitude,
          lng: coords?.longitude,
        };
        console.log(formData, "formdata");
        mutate(formData);
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
          <h1 className="items-center my-3 font-medium text-xl md:text-2xl ">
            What's your details?
          </h1>

          {/* first & last name */}
          <div className="flex gap-2">
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter First name"
                className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
              />
              {errors.first_name && touched.first_name && errors.first_name}
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter last name"
                className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
              />
              {errors.last_name && touched.last_name && errors.last_name}
            </div>
          </div>

          {/* email */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>

          {/* passwprd */}
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

          {/* date of birth */}
          <div>
            <input
              type="date"
              name="dob"
              id="dob"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />
            {errors.dob && touched.dob && errors.dob}
          </div>

          {/* mobile number */}
          <div>
            <input
              type="tel"
              name="mobile_no"
              id="mobile_no"
              placeholder="Enter your mobile number"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile_no}
            />
            {errors.mobile_no && touched.mobile_no && errors.mobile_no}
          </div>

          {/* profile image */}
          <div className="flex items-center gap-1">
            <div className="flex-1">
              <input
                type="file"
                name="image"
                id="image"
                className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
                onChange={imageHandle}
                onBlur={handleBlur}
                // value={values.profile_image}
                // placeholder="Select profile image"
              />
              {/* {errors.profile_image && touched.profile_image && errors.profile_image} */}
            </div>
          </div>

          {/* gender */}
          <div className="">
            <div className="flex text-center">
              <div className="flex-1 space-x-3">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={() => handleChange("gender")("Male")}
                  checked={values.gender === "Male"}
                />
                <label htmlFor="male" className="">
                  Male
                </label>
              </div>
              <div className="flex-1 space-x-3">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={() => handleChange("gender")("Female")}
                  checked={values.gender === "Female"}
                />
                <label htmlFor="female" className="">
                  Female
                </label>
              </div>
              <div className="flex-1 space-x-3">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  onChange={() => handleChange("gender")("Other")}
                  checked={values.gender === "Other"}
                />
                <label htmlFor="other" className="">
                  Other
                </label>
              </div>
              {errors.gender && touched.gender && errors.gender}
            </div>
          </div>

          {/* address */}
          <div>
            <textarea
              name="address"
              id="address"
              rows={1}
              placeholder="Enter your address"
              className="py-1.5 px-3 border w-full bg-[#EEEEEE] rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {errors.address && touched.address && errors.address}
          </div>

          <div>
            <button
              type="submit"
              className="bg-black text-white w-full py-2 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
