import React from "react";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import { useGetRecentPostQuery } from "../redux/slices/blogSlice";

const HomeRecentPost = () => {
  // Fetch data
  const { data: posts, error, isLoading } = useGetRecentPostQuery();

  if (isLoading) {
    return (
      <section className="mt-5 p-5 lg:p-0">
        <div className="grid gap-5 lg:gap-10 grid-cols-1 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div className="row-span-2">
              <CardSkeleton />
            </div>
            <div>
              <CardSkeleton />
            </div>
          </div>
          <div>
            <CardSkeleton />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="mt-5 p-5 lg:p-0">
      <h2 className="text-2xl font-bold mb-5">Recent blog posts</h2>
      <div className="grid gap-5 lg:gap-10 grid-cols-1 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="row-span-2">
            <Card post={posts[0]} className="grid-cols-1" />
          </div>
          <div>
            <Card post={posts[1]} className="grid-cols-1 tablet:grid-cols-2" />
          </div>
          <div>
            <Card post={posts[2]} className="grid-cols-1 tablet:grid-cols-2" />
          </div>
        </div>
        <div>
          <Card post={posts[3]} className="grid-cols-1 lg:grid-cols-2" />
        </div>
      </div>
    </section>
  );
};

export default HomeRecentPost;
