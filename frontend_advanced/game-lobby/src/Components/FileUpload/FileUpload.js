import React, { useEffect, useState } from "react";
import { storage } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../Firebase";
import { auth } from "../../Firebase";

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const [url, setUrl] = useState("");

  useEffect(() => {
    const getProfile = httpsCallable(functions, "getProfile");
    getProfile({ uid: auth.currentUser.uid }).then((result) => {
      setUrl(result.data.url);
    });
  }, []);

  const handleChange = (e) => {
    console.log("hello");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log("image: ", image);
    }
  };

  const handleUpload = () => {
    const uploadRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(uploadRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const uploadPicture = httpsCallable(functions, "uploadPicture");
          uploadPicture({
            uid: auth.currentUser.uid,
            url: downloadURL,
          });
          setUrl(downloadURL);

          // display the image using the download URL code below:
        });
      }
    );
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Profile:</h1>
      </div>
      <div>
        <input type="file" onChange={handleChange} />
      </div>
      <div>
        <button onClick={handleUpload}>Submit</button>
      </div>
      <div>
        <img
          className="profilePic"
          src={url}
          alt="You have not uploaded a profile"
        />
      </div>
    </div>
  );
};

export default FileUpload;
