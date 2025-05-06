import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const ReadMore = () => {

    const { id } = useParams()
    const cid = parseInt(id)



    // category_id

    const get = useLoaderData()

    const news = get.find(n => n.category_id !== cid)
    console.log(news)
    const { details, thumbnail_url } = news;








    return (
        <div>
            <div className="img-container border  p-2.5">
                <img className='p-4 rounded-3xl' src={thumbnail_url} alt="" />
            </div>
            <div>
                <h2>This book id are  :</h2>
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