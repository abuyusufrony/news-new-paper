import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const ReadMore = () => {

    const { id } = useParams()
    const pid = parseInt(id)
    const get = useLoaderData()
    const newsFind = get.filter(news => news.category_id === pid)
    const { details } = newsFind
    console.log(get)


    return (
        <div>
            <div>
                <h2>This book id are {newsFind.id} :</h2>
                <h2>hard work take action .  </h2>
                <h2>you are doing well</h2>
                {
                    details
                }
            </div>
        </div>
    );
};

export default ReadMore;