import React from 'react';
import { LinkedinFilled, GithubOutlined, InstagramOutlined } from '@ant-design/icons';

export function SocialMediaNew() {
    return(
        <div className="flex justify-center space-x-10 relative bottom-3"> {/* Adjusts the spacing between icons */}
            <a href="https://github.com/HaniChihabi" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-black hover:text-gray-800 transition duration-300" // Tailwind classes for color and hover effect
               style={{ fontSize: '22px' }}> {/* Adjusts the icon size */}
                <GithubOutlined />
            </a>
            <a href="https://www.instagram.com/hanigetsbuckets" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-black hover:text-gray-800 transition duration-300" // Tailwind classes for color and hover effect
               style={{ fontSize: '22px' }}> {/* Adjusts the icon size */}
                <InstagramOutlined />
            </a>
            <a href="https://www.linkedin.com/in/hani-chihabi-8978812b8/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-black hover:text-gray-800 transition duration-300 " // Tailwind classes for color and hover effect
               style={{ fontSize: '22px' }}> {/* Adjusts the icon size */}
                <LinkedinFilled />
            </a>
            
        </div>
    );
}
