import React from "react";
import Card from "../components/Card";
import { useGetRecentPostQuery } from "../redux/slices/blogSlice";

const DetailRecentBlogPosts = () => {
  const { data, error, isLoading } = useGetRecentPostQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
