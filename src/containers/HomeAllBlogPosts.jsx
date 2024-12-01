import React, { useState } from "react";
// Hooks
import { useGetPostQuery } from "../redux/slices/blogSlice";
// Components
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
// Icon
import arrowRightBlack from "../assets/icons/arrow-right-black.svg";
import arrowLeftBlack from "../assets/icons/arrow-left-black.svg";

const HomeAllBlogPosts = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const { data, isError, isLoading } = useGetPostQuery(page);
  const posts = data;
  if (isLoading) {
    return (
      <section className="my-10 p-5 lg:p-0">
        <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 pb-10  border-b border-text">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </section>
    );
  }

  if (isError) {
    return <div>Error: pesan error</div>;
  }
  return (
    <section className="my-10 p-5 lg:p-0">
      <h2 className="text-2xl font-bold mb-5">All blog posts</h2>
      <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 pb-10  border-b border-text">
        {posts.map((post) => (
          <Card key={post.key} post={post} className="grid-cols-1" />
        ))}
      </div>
      <div className="flex flex-col tablet:flex-row tablet:justify-between my-5">
        <button
          onClick={prevPage}
          className="text-text self-center tablet:self-start flex justify-center items-center gap-1"
        >
          <img src={arrowLeftBlack} alt="arrow left black icon" />
          <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          className="text-text self-center tablet:self-start flex justify-center items-center gap-1"
        >
          <span>Next</span>
          <img src={arrowRightBlack} alt="arrow right black icon" />
        </button>
      </div>
    </section>
  );
};

export default HomeAllBlogPosts;
