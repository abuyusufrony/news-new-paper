import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Detail from '../Detail/Detail';

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const pid = parseInt(id)

    const newsFind = data.filter(news => news.category_id === pid)






    console.log(data)
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">News for Category: {id} </h2>
            <div>
                {
                    newsFind.map(singleNews => <Detail news={singleNews}></Detail>)
                }
            </div>


        </div>
    );
};

export default NewsDetails;