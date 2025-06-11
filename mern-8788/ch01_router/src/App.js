import React from "react";

function MyApp() {
  const username = "Mr. Coder"
  return (
    <>
      <h1>Hello World {username}</h1>
      <div>
        {username}
      </div>
    </>
  );
}

export default MyApp;



// src/utils/uploadFile.js

// import axiosInstance from "@/app/config/axiosInstance";
// import { textToSlug } from "./textUtils";

// const uploadFile = async (
//   file: File,
//   folder: string,
//   endpoint: string,
//   userPrefix: string
// ) => {
//   try {
//     userPrefix = textToSlug(userPrefix);
//     if (!file) {
//       return { success: false, error: "File upload failed" };
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     const uploadEndpoint = `${endpoint}?prefix=${encodeURIComponent(
//       userPrefix
//     )}&folder=${encodeURIComponent(folder)}`;

//     const response = await axiosInstance.post(uploadEndpoint, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     if (response.data.success) {
//       return { success: true, fileName: response.data.fileName };
//     } else {
//       return { success: false, error: "File upload failed" };
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return { success: false, error: "An error occurred during file upload" };
//   }
// };

// export default uploadFile;
