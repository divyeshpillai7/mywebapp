import React, { useState } from 'react';

const CaptionGeneration = () => {
    const [inputText, setInputText] = useState('');
    const [image, setImage] = useState(null);
    const [captions, setCaptions] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGenerateCaptions = async () => {
        if (!inputText && !image) return alert('Please enter some text or upload an image!');
    
        setLoading(true);
        const formData = new FormData();
    
        if (inputText) {
            formData.append('inputText', inputText);
        }
    
        if (image) {
            formData.append('image', image);
        }
    
        try {
            const response = await fetch('http://localhost:5002/generate-caption', {
                method: 'POST',
                body: formData,  // Let FormData set the content type
            });
    
            const data = await response.json();
            if (data.captions) {
                setCaptions(data.captions); // Set the captions
                setHashtags(data.hashtags); // Set the hashtags
            } else {
                throw new Error('No captions or hashtags returned');
            }
        } catch (error) {
            alert('Error generating captions');
        }
        setLoading(false);
    };
    

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div className="caption-generation-container">
            <h2>Generate Captions</h2>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here..."
                rows="4"
                style={{ width: '100%' }}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ marginTop: '10px' }}
            />
            <button onClick={handleGenerateCaptions} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Captions'}
            </button>

            {captions.length > 0 && (
                <div>
                    <h3>Captions:</h3>
                    <ul>
                        {captions.map((caption, index) => (
                            <li key={index}>{caption}</li>
                        ))}
                    </ul>
                </div>
            )}

            {hashtags.length > 0 && (
                <div>
                    <h3>Hashtags:</h3>
                    <ul>
                        {hashtags.map((hashtag, index) => (
                            <li key={index}>{hashtag}</li>
                        ))}
                    </ul>
                </div>
            )}

            <style>
                {`
                    .caption-generation-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
                    }
                    ul {
                        margin-top: 20px;
                        list-style-type: none;
                        padding: 0;
                    }
                    li {
                        padding: 5px 0;
                        font-size: 16px;
                    }
                `}
            </style>
        </div>
    );
};

export default CaptionGeneration;
