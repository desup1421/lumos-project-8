import React from "react";
import HomeRecentPost from "../containers/HomeRecentPost";
import HomeAllBlogPosts from "../containers/HomeAllBlogPosts";


const Home = () => {
  return (
    <main>
      <header className="border-b border-y border-text p-4">
        <h1 className="font-bold uppercase text-center text-[72px] tablet:text-[160.8px] desktop:text-[243.8px]">
          The Blog
        </h1>
      </header>
      {/* RECENT POST */}
      <HomeRecentPost />
      {/* ALL BLOG POST */}
      <HomeAllBlogPosts />
    </main>
  );
};

export default Home;
