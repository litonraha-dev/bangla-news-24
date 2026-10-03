import Image from "next/image";
import Marquee from "../components/Marquee";
import MainNews from "../components/MainNews";
import NewsCard from "../components/NewsCard";
interface IOtherSections{
  curationId:string,
  title:string,
  articles:{
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string,
  }[];
}


export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles
const otherSections:IOtherSections[] = section.slice(1);
// console.log(otherSections);
  return (
    <div>
      <Marquee></Marquee>
      <div className="grid  grid-cols-3 max-w-7xl mx-auto">
        {/* News */}
        <div className=" col-span-2 p-10 ">

          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5 mt-5">
            {
            otherSections.map(os=><div className=" py-2 pb-1 0" key={os.curationId}>
              <h1 className="font-bold border-b-2  border-red-700  ">{os.title}</h1>
             <div className="grid grid-cols-3 gap-3 mt-3">
               {
                os.articles.map(news =><NewsCard news={news} key={news.id}></NewsCard>)
              }
             </div>
            </div>)
          }
          </div>
        </div>
        {/* Most read section */}
        <div className=" col-span-1 ">
          

        </div>
      </div>
    </div>
  );
}
