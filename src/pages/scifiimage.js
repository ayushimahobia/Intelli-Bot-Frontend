import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Collapse
} from "@mui/material";
import "./chatbot.css";

const ScifiImage = () => {
  const [text, settext] = useState("");
  const [image, setimage] = useState("");
  const [error, setError] = useState("");
  const [text2, settext2] = useState("Your Image will appear here.");
  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    settext2("Please wait while we generate your image.");
    try {
      const { data } = await axios.post("https://intelli-bot-backend.onrender.com/api/v1/openai/scifi-image", { text });
      console.log(data);
      setimage(data);
      settext2("");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
    <div className="container2">
          <Collapse in={error}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </Collapse>
          <form className="form2" onSubmit={handleSubmit}>
            <h3 className="title2">AI Image Generation</h3>
            <textarea
              className="text-input2"
              placeholder="add your text"
              required
              onChange={(e) => {
                settext(e.target.value);
              }}
            >{text}</textarea>

            <button type="submit" className="chat-button2">
              Generate Image
            </button>

            <p className="go-back2">
              not this tool ? <a href="/">GO BACK</a>
            </p>
          </form>

          <div className="card2-image">
            {image?<img src ={image} alt = 'scifiimage'/>:<pre>{text2}</pre>}
          </div>
        </div>
    </>
  );
};

export default ScifiImage;