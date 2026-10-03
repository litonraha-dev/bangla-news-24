import Image from 'next/image';
import React from 'react';

interface News{
    imageUrl:string,
    imageAlt: string,
    category:string,
    description:string,
    title:string
}
const NewsCard = ({news}:{news:News}) => {
    console.log(news,"from news card")
    return (
        <div>
             <div className="flex gap-4">
                  <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <Image
                        src={news.imageUrl}
                        height={600}
                        width={600}
                        alt={news.imageAlt}
                      ></Image>
                    </figure>
                    <div className="card-body">
                        <p className="text-red-600 font-semibold">{news.category}</p>
                      <h2 className="card-title">{news.title}</h2>
                      <p>{news.description}</p>
                    </div>
                  </div>
                 
                </div>
        </div>
    );
};

export default NewsCard;