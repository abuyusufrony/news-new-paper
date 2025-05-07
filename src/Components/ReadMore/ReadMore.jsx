import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const ReadMore = () => {

    const { id } = useParams()




    // category_id

    const get = useLoaderData()

    const news = get.find(n => n.id === id)
    console.log(news)
    const { details, thumbnail_url, title, author } = news;

    const { img, name, published_date } = author;

    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-72 object-cover rounded-t-2xl"
                />

                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        {img && (
                            <img
                                src={img}
                                alt={name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        )}
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{name}</p>
                            <p className="text-xs text-gray-500">
                                {new Date(published_date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">{details}</p>
                </div>
            </div>
        </div>
    );
};








export default ReadMore;