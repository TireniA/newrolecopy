import React, { useState } from "react";
import "./Start.css";
import logo from "../../assets/logo.png";
import startpfp from "../../assets/startpfp.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const questions = [
    {
      id: 1,
      question: "What is your Name?",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      question: "What is your Email?",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 3,
      question: "What Best Applies to you?",
      type: "radio",
      options: ["Job seeker", "Recruiter", "Recruiting Agency", "Employer"],
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const navigate = useNavigate()

  const handleProceed = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setInputValue(""); 
      setRadioValue(""); 
    } else {
      navigate('/login')
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div className="container-fluid start p-0">
      <div className=" startfirst order-md-1 order-2 ">
        <h4>Optimize your Job Search with AI</h4>
        <div className="stesticon">
          <div className="sttesti">
            <div className="spfp gap-1 d-flex align-items-center">
              <img src={startpfp} alt="" className="img-fluid" />
              <div className="sttestit">
                <p>Adam Ryan</p>
                <small>CMO at Finecity</small>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iste
              illo mollitia esse, voluptatem aut?
            </p>
          </div>

          <div className="sttesti">
            <div className="spfp gap-1 d-flex align-items-center">
              <img src={startpfp} alt="" className="img-fluid" />
              <div className="sttestit">
                <p>Adam Ryan</p>
                <small>CMO at Finecity</small>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iste
              illo mollitia esse, voluptatem aut?
            </p>
          </div>

          <div className="sttesti">
            <div className="spfp gap-1 d-flex align-items-center">
              <img src={startpfp} alt="" className="img-fluid" />
              <div className="sttestit">
                <p>Adam Ryan</p>
                <small>CMO at Finecity</small>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iste
              illo mollitia esse, voluptatem aut?
            </p>
          </div>

          <div className="sttesti">
            <div className="spfp gap-1 d-flex align-items-center">
              <img src={startpfp} alt="" className="img-fluid" />
              <div className="sttestit">
                <p>Adam Ryan</p>
                <small>CMO at Finecity</small>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iste
              illo mollitia esse, voluptatem aut?
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex order-md-2 order-1 align-items-center startform justify-content-center flex-column">
        <div className="strff">
          <div className="d-flex  align-items-center gap-2 justify-content-center img">
            <img src={logo} alt="" className="img-fluid" />
            <span>Nextrole</span>
          </div>
          <h3>Join Waitlist</h3>
          <div>
            <h5>
              {questions[currentQuestionIndex].id}.{" "}
              {questions[currentQuestionIndex].question}
            </h5>
            {questions[currentQuestionIndex].type === "text" ||
            questions[currentQuestionIndex].type === "email" ? (
              <input
                type={questions[currentQuestionIndex].type}
                placeholder={questions[currentQuestionIndex].placeholder}
                value={inputValue}
                onChange={handleInputChange}
              />
            ) : (
              <div>
                {questions[currentQuestionIndex].options.map((option) => (
                  <div className="form-check mt-3" key={option}>
                    <input 
                      type="radio"
                      className="form-check-input custom-radio"
                      name="option"
                      value={option}
                      checked={radioValue === option}
                      onChange={handleRadioChange}
                    />
                    {option}
                    <label
                      className="form-check-label"
                      htmlFor={option}
                    ></label>
                  </div>
                ))}
              </div>
            )}
            <button onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
