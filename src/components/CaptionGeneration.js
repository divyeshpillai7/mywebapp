import React, { useState } from 'react';

const CaptionGeneration = () => {
    const [inputText, setInputText] = useState('');
    const [image, setImage] = useState(null);
    const [captions, setCaptions] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleGenerateCaptions = async () => {
        if (!inputText && !image && !imageUrl) return alert('Please enter some text and provide an image!');
    
        setLoading(true);
        const formData = new FormData();
        formData.append('text', inputText);
        
        if (imageUrl) {
            formData.append('image_url', imageUrl);
        } else if (image) {
            formData.append('image', image);
        }
    
        try {
            const response = await fetch('http://localhost:5000/gemini', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json();
            
            console.log('Response from server:', data); 
            if (data.error) {
                throw new Error(data.error);
            }

            if (Array.isArray(data) && data.length > 0) {
                const allCaptions = data.map(item => item.caption || '');
                const allHashtags = data.map(item => item.hashtags || '');
                
                if (allCaptions.length === 0 || allHashtags.length === 0) {
                    throw new Error('No valid captions or hashtags in response');
                }
                
                setCaptions(allCaptions);
                setHashtags(allHashtags);
            } else {
                throw new Error('Invalid response format from server');
            }
        } catch (error) {
            console.error('Error details:', error);
            alert('Error generating captions: ' + error.message);
        } finally {
            setLoading(false);
        }
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
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ 
                    marginTop: '10px',
                    fontFamily: 'Poppins',
                }}
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Or enter image URL..."
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
            <button onClick={handleGenerateCaptions} disabled={loading} style={{ 
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
                        // align-items: center;
                        gap: 20px;
                        padding: 10px;
                        font-family: poppins;
                        // background: linear-gradient(to bottom right, #4b0b6a, #ffffff);
                        
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