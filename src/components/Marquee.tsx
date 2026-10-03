

import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headlines{
    id:string,
    title:string
}

const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
  const headlines:Headlines[] = data.data;
 console.log(headlines)

    return (
        <div className='bg-red-600 text-white '> 
      <div className='flex px-5 max-w-7xl mx-auto'>
          <div className='bg-red-800 py-1 px-5 font-bold'>সর্বশেষ</div>
            <MarqueeText className='py-1' direction='right' duration={10}>

           {
               headlines.map(h=> <span key={h.id}>
              <Link className='hover:underline' href={`/news/${h.id}`}>
                {h.title} 
              </Link>
            
            <span className='mx-5'>•</span>
            </span>)
           }
           </MarqueeText>
      </div>
        </div>
    );
};

export default Marquee;