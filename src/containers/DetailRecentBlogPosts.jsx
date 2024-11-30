import React from "react";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import { useGetRecentPostQuery } from "../redux/slices/blogSlice";

const DetailRecentBlogPosts = () => {
  const { data, isError, isLoading } = useGetRecentPostQuery();
  if (isLoading) {
    return (
      <aside className="col-span-1 row-start-1 pt-12">
        <div className="mb-5 flex flex-col gap-5">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </aside>
    );
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <aside className="col-span-1 row-start-1 pt-12">
      {data.map((item) => (
        <div key={item.key} className="mb-5">
          <Card post={item} />
        </div>
      ))}
    </aside>
  );
};

export default DetailRecentBlogPosts;
