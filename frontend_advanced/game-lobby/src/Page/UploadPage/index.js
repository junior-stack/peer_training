import FileUpload from "../../Components/FileUpload/FileUpload";
import "./UploadPage.css";
import Container from "@material-ui/core/Container";
import NavBar from "../../Components/NavBar/NavBar";

const UploadPage = () => {
  return (
    <div className="toproot">
      <NavBar />
      <Container>
        <div className="Container">
          <div className="top"></div>
          <div>
            <FileUpload />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UploadPage;
