import { request } from "../utilities/request";

export const ImageUploadAPI = async (body: any) => {
  console.log(body,"ddsjhf");

  const response = await request({
    url: `customer_api/upload_docs`,
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "multipart/form-data",
      key: "ConnectPopo@23",
    },
  });

  return response;
};
