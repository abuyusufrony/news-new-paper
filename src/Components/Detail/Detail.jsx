import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';


// this card design from chatgpt!!!!!!!!!!

const Detail = ({ news }) => {
    const {
        title,
        image_url,
        details,
        rating,
        total_view,
        author,
        id

    } = news;

    return (
        <div className="bg-base-100 shadow-md rounded-xl p-4 mb-6">
            {/* Author Info */}
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img src={author?.img} alt={author?.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-semibold">{author?.name || 'Unknown Author'}</p>
                    <p className="text-sm text-gray-500">{new Date(author?.published_date).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-2">{title}</h2>

            {/* Image */}
            <div className="w-full h-56 overflow-hidden rounded-lg mb-3">
                <img src={image_url} alt={title} className="w-full h-full object-cover" />

            </div>

            {/* Details */}
            <p className="text-sm text-gray-700 mb-4">{details.slice(0, 200)}...</p>
            <span> <Link to={`/${id}`}> Read more</Link></span>

            {/* Footer: Rating & Views */}
            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating?.number || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default Detail;