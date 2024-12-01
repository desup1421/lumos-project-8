import React from "react";
import HomeRecentPost from "../containers/HomeRecentPost";
import HomeAllBlogPosts from "../containers/HomeAllBlogPosts";
import BigHeader from "../components/BigHeader";
import MyHelmet from "../components/MyHelmet";

const Home = () => {
  return (
    <>
      <MyHelmet 
        title="Lumoshive Blog" 
        desc="LumosBlog is a blog website where you can find all the latest news and updates about the latest technologies."
        img="\android\android-launchericon-512-512.png"
      />
      <main>
        {/* BIG HEADER */}
        <BigHeader>The Blog</BigHeader>
        {/* RECENT POST */}
        <HomeRecentPost />
        {/* ALL BLOG POST */}
        <HomeAllBlogPosts />
      </main>
    </>
  );
};

export default Home;
