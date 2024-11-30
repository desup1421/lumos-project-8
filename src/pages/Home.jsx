import React from "react";
import HomeRecentPost from "../containers/HomeRecentPost";
import HomeAllBlogPosts from "../containers/HomeAllBlogPosts";
import BigHeader from "../components/BigHeader";


const Home = () => {
  return (
    <main>
      {/* BIG HEADER */}
      <BigHeader>The Blog</BigHeader>
      {/* RECENT POST */}
      <HomeRecentPost />
      {/* ALL BLOG POST */}
      <HomeAllBlogPosts />
    </main>
  );
};

export default Home;
