import { request } from "../utilities/request";

export const SignUp = async (body: any) => {
  const response = await request({
    url: "customer_api/register",
    method: "POST",
    headers: {
      // Ensure proper headers for multipart form data
      'Content-Type': 'multipart/form-data',
      'key': 'ConnectPopo@23'
    },
    body,
  });
  return response;
};

export const SignIn = async (body: any) => {
  const response = await request({
    url: "customer_api/login",
    method: "POST",
    body,
  });
  return response;
};
