// import React from "react";
// import "./Updates.css";
// import { UpdatesData } from "../../Data/Data";

// const Updates = () => {
//   return (
//     <div className="Updates">
//       {UpdatesData.map((update) => {
//         return (
//           <div className="update">
//             <img src={update.img} alt="profile" />
//             
//             <div className="noti">
//               <div  style={{marginBottom: '0.5rem'}}>
//                 <span>{update.name}</span>
//                 <span> {update.noti}</span>
//               </div>
//                 <span>{update.time}</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };


import React, { useState } from "react";
import "./Updates.css";

const Updates = () => {
  const [isPredictionsModalOpen, setPredictionsModalOpen] = useState(false);
  const [isNewsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [companySize, setCompanySize] = useState("");
  const [sustainabilityScore, setSustainabilityScore] = useState("");
  const [greenInvestments, setGreenInvestments] = useState("");
  const [newsletterHighlights, setNewsletterHighlights] = useState("");
  const [newsletterChallenges, setNewsletterChallenges] = useState("");
  const [newsletterGrowth, setNewsletterGrowth] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setLoading] = useState(false);


  const openPredictionsModal = () => {
    // Close the newsletter modal if it is open
    setNewsletterModalOpen(false);
  
    // Open the predictions modal
    setPredictionsModalOpen(true);
  };
  
  const openNewsletterModal = () => {
    // Close the predictions modal if it is open
    setPredictionsModalOpen(false);
  
    // Open the newsletter modal
    setNewsletterModalOpen(true);
  };
  
  const closePredictionsModal = () => {
    setPredictionsModalOpen(false);
  };
  
  const closeNewsletterModal = () => {
    setNewsletterModalOpen(false);
  };
  

  const handlePredictionsSubmit = () => {
    setLoading(true);
    // Construct the question based on user inputs
    const question = `Given Company Size: ${companySize}, Sustainability Score: ${sustainabilityScore}, Green Investments: ${greenInvestments}. What are the sustainable growth methods for the future?`;

    // Replace YOUR_API_KEY with your actual OpenAI API key
    const apiKey = "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";



   


    // Construct the OpenAI API request
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a financial expert , answer that based on the input , in which year my organization can achieve sustainability. just predict a vague figure in just crisp line. This is year 2023 just give the approx year you are force to give me the year" },
          { role: "user", content: question },
        ],
      }),

      
    };

    // Make the API request
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const output = data.choices[0].message.content;
      setResponse(output);
      closePredictionsModal();
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => setLoading(false)); // Stop loading regardless of success or error
};

  const handleNewsletterSubmit = () => {
    setLoading(true);
    // Construct the question based on user inputs
    const question = `Major Highlight: ${newsletterHighlights}, Challenges: ${newsletterChallenges}, Growth this Month: ${newsletterGrowth}. Generate a newsletter for the organization in very crisp short`;

    // Replace YOUR_API_KEY with your actual OpenAI API key
    const apiKey = "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";

    // Construct the OpenAI API request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a newsletter writer. Generate a newsletter based on the input in just one line only , very crisp " },
          { role: "user", content: question },
        ],
      }),
    };

    // Make the API request
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const output = data.choices[0].message.content;
      setResponse(output);
      closeNewsletterModal();
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => setLoading(false)); // Stop loading regardless of success or error
};

  return (
    <div className="Updates">
      <div className="ModalContainer">
        <button className="aibtn" onClick={openPredictionsModal}>Get Future Predictions</button>
        {isPredictionsModalOpen && (
          <div className="ModalContent">
            <div className="CloseButton" onClick={closePredictionsModal}>
              &#10006;
            </div>
            <h4>Future Predictions</h4>
            {/* Input fields for predictions */}
            <label className="ai-label"  htmlFor="companySize">Company Size:</label>
            <input
              type="number"
              id="companySize"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
            />
            <br />
            <label className="ai-label"  htmlFor="sustainabilityScore">Sustainability Score:</label>
            <input
              type="number"
              id="sustainabilityScore"
              value={sustainabilityScore}
              onChange={(e) => setSustainabilityScore(e.target.value)}
            />
            <br />
            <label className="ai-label"  htmlFor="greenInvestments">Number of Green Investments:</label>
            <input
              type="number"
              id="greenInvestments"
              value={greenInvestments}
              onChange={(e) => setGreenInvestments(e.target.value)}
            />
            <br />
            <button className="ai-submit" onClick={handlePredictionsSubmit}>Submit</button>
          </div>
        )}
      </div>

      <div className="ModalContainer">
        <button className="aibtn" onClick={openNewsletterModal}>Generate Newsletter</button>
        {isNewsletterModalOpen && (
          <div className="ModalContent">
            <div className="CloseButton" onClick={closeNewsletterModal}>
              &#10006;
            </div>
            <h4>Generate Newsletter</h4>
            {/* Input fields for newsletter */}
            <label  className="ai-label"  htmlFor="newsletterHighlights">Major Highlight:</label>
            <input className="ai-input"
              type="text"
              id="newsletterHighlights"
              value={newsletterHighlights}
              onChange={(e) => setNewsletterHighlights(e.target.value)}
            />
            
            <label className="ai-label" htmlFor="newsletterChallenges">Challenges:</label>
            <input className="ai-input"
              type="text"
              id="newsletterChallenges"
              value={newsletterChallenges}
              onChange={(e) => setNewsletterChallenges(e.target.value)}
            />
            
            <label className="ai-label"  htmlFor="newsletterGrowth">Growth this Month:</label>
            <input className="ai-input"
              type="text"
              id="newsletterGrowth"
              value={newsletterGrowth}
              onChange={(e) => setNewsletterGrowth(e.target.value)}
            />
            
            <button className="ai-submit" onClick={handleNewsletterSubmit}>Submit</button>
          </div>
        )}
      </div>
{isLoading && <div className="LoadingAnimation">Loading...</div>}



      <div className="ai-msg">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Updates;





