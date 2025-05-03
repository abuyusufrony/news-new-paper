import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Detail from '../Detail/Detail';

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const pid = parseInt(id)

    // this logic from chatgpt
    // at first iam trying with  newsFind = data.filter(news => news.id === pid) but i can not success ,i think id are string value and pid are int value
    // i am write this not for me , next time when i am practice this code ,i will be done in different way
    

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