import React, { useState } from 'react';

const ImageGeneration = () => {
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerateImage = async () => {
        if (!prompt) return alert('Please enter a prompt!');
        
        setLoading(true);
        try {
            // Send the prompt to the backend for image generation
            const response = await fetch('http://localhost:5002/generate-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            if (response.ok && data.imageUrl) {
                setImage(data.imageUrl); // Set the image URL returned from the backend
            } else {
                throw new Error('Error generating image');
            }
        } catch (error) {
            alert('Error generating image');
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
                style={{ width: '100%' }}
            />
            <button onClick={handleGenerateImage} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Image'}
            </button>

            {/* Display the generated image and provide a download option */}
            {image && (
                <div>
                    <img src={image} alt="Generated" className="generated-image" />
                    <a href={image} download>
                        <button>Download Image</button>
                    </a>
                </div>
            )}
            
            <style>
                {`
                    .image-generation-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
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
