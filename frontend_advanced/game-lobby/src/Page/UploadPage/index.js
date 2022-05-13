import FileUpload from "../../Components/FileUpload/FileUpload";
import "./UploadPage.css";
import Container from "@material-ui/core/Container";

const UploadPage = () => {
  return (
    <Container>
      <div className="Container">
        <div className="top"></div>
        <div>
          <FileUpload />
        </div>
      </div>
    </Container>
  );
};

export default UploadPage;
