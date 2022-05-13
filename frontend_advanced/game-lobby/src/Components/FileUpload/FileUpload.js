import React, { useState } from "react";
import { storage } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

const FileUpload = () => {
  const [image, setImage] = useState(null);

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
          await uploadPicture({ uid: 0, color: downloadURL });

          // display the image using the download URL code below:
        });
      }
    );
  };

  return (
    <div>
      Upload:
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
