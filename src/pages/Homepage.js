import React from "react";
import {} from "@mui/icons-material/DescriptionRounded";
import { useNavigate } from "react-router-dom";
import Card2 from "./card.js";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div>
          <Card2
            onClick={() => navigate("/summary")}
            icon={2}
            title={"Texy Summary"}
            desc={"Summarize Long Text Into Short sentence"}
          />
        </div>
        <div>
          <Card2
            onClick={() => navigate("/paragraph")}
            icon={1}
            title={"Paragraph Generation"}
            desc={"Generate Paragraph with words"}
          />
        </div>
        <div>
          <Card2
            onClick={() => navigate("/chatbot")}
            icon={1}
            title={"Chat-Bot"}
            desc={"Chat with AI ChatBot. Powered by ChatGPT."}
          />
        </div>
        <div>
          <Card2
            onClick={() => navigate("/js-converter")}
            icon={1}
            title={"Js-Converter"}
            desc={"Translate any code to javascript code"}
          />
        </div>
        <div>
          <Card2
            onClick={() => navigate("/scifi-image")}
            icon={1}
            title={"Scifi-Images"}
            desc={"Generate Scifi Images. Powered by ChatGPT."}
          />
        </div>
      </div>
    </>
  );
};
export default Homepage;
