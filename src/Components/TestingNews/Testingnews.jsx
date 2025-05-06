import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Testingnews = () => {
    const { id } = useParams()
    const get = useLoaderData()
    const pid = parseInt(id)
    const newsFind = get.filter(news => news.category_id === pid)
    console.log(newsFind)
    const { title } = newsFind
    console.log(get)
    return (
        <div>
            <h2>This are Testing news</h2>
            <h2 className="text-xl font-bold mb-4">News for Category: {title}  </h2>
        </div>
    );
};

export default Testingnews;