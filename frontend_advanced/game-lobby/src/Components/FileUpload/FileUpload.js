import React, { useContext, useState } from "react";
import ColorContext from "../../Context/ColorContext";
import { CircularProgress } from "@material-ui/core";
import { updatePic } from "../../API/api";

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const [progress, setProgress] = useState(0);

  const { userProfile, setUserProfile } = useContext(ColorContext);

  const handleChange = (e) => {
    console.log("hello");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log("image: ", image);
    }
  };

  const uploadFile = () => {
    let data = new FormData();
    data.append("userID", userProfile.userID);
    data.append("file", image);

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setProgress(percent);
      },
      withCredentials: true,
    };

    updatePic(data, options).then((res) => {
      console.log("res: ", res);
      setUserProfile({
        userID: userProfile.userID,
        email: userProfile.email,
        url: `http://localhost:3000/profile/profile-image/${res.data.url}`,
      });
    });
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Profile:</h1>
      </div>
      <div>
        <div>
          <input type="file" onChange={handleChange} />
        </div>
      </div>
      <div className="inputfile">
        <div>
          <button
            onClick={uploadFile}
            style={{ position: "relative", top: -10, left: -15 }}
          >
            Submit
          </button>
          <CircularProgress variant="determinate" value={progress} />
        </div>
      </div>
      <div>
        <img
          className="profilePic"
          src={userProfile.url}
          alt="You have not uploaded a profile"
        />
      </div>
    </div>
  );
};

export default FileUpload;
