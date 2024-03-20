import React, { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import toast, { Toaster } from "react-hot-toast";
const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleUplaodImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myCollection");
    data.append("cloud_name", "dko0bcyip");

    try {
      if (image === null) {
        return alert("Please Upload Image");
      }
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dko0bcyip/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const cloudData = await res.json();
      setUrl(cloudData.url);
      console.log(cloudData.url);
      alert("File uploaded");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <div className="flex justify-center items-center h-screen ">
        {/* Image Upload Section  */}
        <div className=" bg-[#2C3A47] p-10 rounded-xl">
          {/* Upload Input And Image Section  */}
          <div className="input flex justify-center mb-5">
            <label htmlFor="file-upload" className="custom-file-upload">
              {image ? (
                <img src={URL.createObjectURL(image)} className="h-20 w-20" />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1665/1665680.png"
                  className="h-20 w-20"
                />
              )}
            </label>

            {/* Image Upload Input */}
            <input
              id="file-upload"
              className=" text-white"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* Send Button  */}
          <div className="">
            <button
              onClick={handleUplaodImage}
              className=" w-72 lg:w-96  bg-[#FC427B] text-white rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
