import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  // console.log(news, "from MainNews");
  const [firstNews, ...otherNews] = news;
  // const otherNews = news.slice(1)
  // console.log(otherNews, "OtherNews");
  return (
    <div className="flex gap-4">
      <Link href={`/news/${firstNews.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              src={firstNews.imageUrl}
              height={600}
              width={600}
              alt="FirstNews"
            ></Image>
          </figure>
          <div className="card-body">
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>
      <div>
        {otherNews.slice(4).map((on) => (
          <div
            className="card bg-base-100 border border-gray-300 p-5 "
            key={on.id}
          >
           <Link href={`/news/${on.id}`}>
            <div>
              <p className="text-red-600 font-semibold">{firstNews.category}</p>

              {on.title}
            </div>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
