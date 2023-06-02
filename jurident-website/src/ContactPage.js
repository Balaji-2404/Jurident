import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactPage.css";
import { MDBBtn } from "mdb-react-ui-kit";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import empty from "../src/empty.jpg";
function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [characterLimit] = useState(32);
  // event handler
  const handleChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleChange1 = (event) => {
    setLastName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPhone(event.target.value);
  };
  const handleChange3 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange4 = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <div className="container" style={{ width: "80%" }}>
      <div style={{ width: "50%" }}>
        <h1 className="title">CONTACT US</h1>
        <div className="content" style={{ width: "200%" }}>
          Let’s Connect: We’re here to help, and we’d love to hear from you!
          Whether you have a question, a comment, or just want to chat, you can
          reach out to us through the contact form on this page, or by phone,
          email, or social media.{" "}
        </div>
        <div className="button mt-5 mb-3">
          <MDBBtn style={{ width: "45%" }} className="mx-3" color="dark">
            <CommentOutlinedIcon className="mx-1"> </CommentOutlinedIcon>
            VIA SUPPORT CHAT
          </MDBBtn>
          <MDBBtn style={{ width: "45%" }} className="mx-2" color="dark">
            <CallOutlinedIcon className="mx-1"></CallOutlinedIcon>VIA CALL
          </MDBBtn>
        </div>
        <MDBBtn outline style={{ width: "100%" }} className="mx-2" color="dark">
          <MailOutlineOutlinedIcon className="mx-1"></MailOutlineOutlinedIcon>
          VIA EMAIL FORM
        </MDBBtn>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">FIRST NAME</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              rows={1}
              value={firstName}
              onChange={handleChange}
              isInvalid={firstName.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    firstName.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {firstName.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">LAST NAME</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              rows={1}
              value={lastName}
              onChange={handleChange1}
              isInvalid={lastName.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    lastName.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {lastName.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">PHONE</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              rows={1}
              value={phone}
              onChange={handleChange2}
              isInvalid={phone.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${phone.length > characterLimit ? "danger" : "primary"}`}
                >
                  {phone.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">EMAIL</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              rows={1}
              value={email}
              onChange={handleChange3}
              isInvalid={email.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${email.length > characterLimit ? "danger" : "primary"}`}
                >
                  {email.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">FEEDBACK</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              rows={3}
              value={feedback}
              onChange={handleChange4}
              isInvalid={feedback.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    feedback.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {feedback.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <MDBBtn className="btn mx-2 mb-4" color="dark">
            SUBMIT
          </MDBBtn>
        </Form>
      </div>
      <div className="img">
        <img src={empty} alt="image" />
      </div>
    </div>
  );
}

export default ContactPage;
