import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async({params}:{parmas:{newsId:string}}) => {
    const {newsId}= await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const news = await res.json();
    const data = news.data;
    console.log(data, "from news details page")
    return (
        <div>
           <h1>{data.title}</h1>
           <Image src={data.imageUrl} height={400} width={400} alt={data.imageAlt}  ></Image>
           <p>{data.text}</p>
        </div>
    );
};

export default NewsDetailsPage;