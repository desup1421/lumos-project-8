import React from "react";
import SubscribeForm from "../components/SubscribeForm";
import HomeAllBlogPosts from "../containers/HomeAllBlogPosts";

const Newsletter = () => {
  return (
    <div className="pt-10">
      <main>
        <SubscribeForm />
        <HomeAllBlogPosts />
      </main>
    </div>
  );
};

export default Newsletter;
