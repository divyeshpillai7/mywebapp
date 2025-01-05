

import React, { useState } from "react";

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    if (!prompt) return alert("Please enter a prompt!");

    setLoading(true);
    try {
      // Send the prompt to the backend for image generation
      const response = await fetch("http://localhost:5000/stability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok && data.success) {
        setImage(data.image_url); 
      } else {
        throw new Error(data.error || "Failed to generate image");
      }
    } catch (error) {
      alert(error.message || "Error generating image");
    }
    setLoading(false);
  };

  return (
    <div className="image-generation-container">
      <h2>Generate Image</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows="4"
        style={{ 
            width: '70%',
            borderRadius: '8px',
            border: '2px solid black',
            boxShadow: '0px 0px 5px 0px black',
            fontFamily: 'Poppins',
            letterSpacing: '1px',
            padding: '10px', 
        }}
      />
      <button onClick={handleGenerateImage} disabled={loading} style={{ 
                    width: '30%',
                    borderRadius: '8px',
                    border: '2px solid black',
                    boxShadow: '0px 0px 5px 0px black',
                    fontFamily: 'Poppins',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    padding: '10px',
                    cursor: 'pointer', 
                }}>
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {/* Display the generated image and provide a download option */}
      {image && (
        <div className="image-container">
          <img
            src={image}
            alt="Generated"
            className="generated-image"
            onError={(e) => {
              console.error("Error loading image");
              e.target.src = ""; // Clear the broken image
            }}
          />
          <a href={image} download className="download-button">
            <button>Download Image</button>
          </a>
        </div>
      )}

      <style>
        {`
                    .image-generation-container {
                        display: flex;
                        flex-direction: column;
                        // align-items: center;
                        margin: 20px;
                        gap: 20px;
                        font-family: poppins;
                    }
                    .generated-image {
                        margin-top: 20px;
                        width: 100%;
                        max-width: 600px;
                    }
                `}
      </style>
    </div>
  );
};

export default ImageGeneration;