import React, { useState } from 'react'
import './../styles/App.css'
export const PersonalizedGreeting = () => {
  const [name, setName] = useState('');

    return (
        <div className="container">
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
            />
            {name && <h1>Hello, {name}!</h1>}
        </div>
    );
}
