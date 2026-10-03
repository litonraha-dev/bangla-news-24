import NewsCard from '@/src/components/NewsCard';
import React from 'react';
interface ICategoryNews{
  id:string,

    imageUrl:string,
    imageAlt: string,
    category:string,
    description:string,
    title:string

}

const CategoryNews = async({params}:{params:{categoryId:string}}) => {
const {categoryId}= await params;
const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
const data =await res.json();
const categoryNews:ICategoryNews[] = data.data;
// console.log(categoryNews);
    return (
        <div>
            <h1 className='text-2xl font-bold border-b-2 border-red-600 mb-5'>{data.title}</h1>
           <div className='grid grid-cols-3 gap-3 '>
             {
                categoryNews.map(news =><NewsCard key={news.id} news ={news}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;