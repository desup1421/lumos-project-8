import React from "react";
import DetailRecentBlogPosts from "../containers/DetailRecentBlogPosts";
import CardSkeleton from "../components/CardSkeleton";
import SubscribeForm from "../components/SubscribeForm";
import { useLocation } from "react-router-dom";
import { useGetPostDetailQuery } from "../redux/slices/blogSlice";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const BlogDetail = () => {
  const { pathname } = useLocation();
  const key = pathname.replace("/blog/", "");
  const { data, isLoading, isError } = useGetPostDetailQuery(key);

  const post = data?.results;
  console.log(post);
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-5 p-5 tablet:p-0">
        <div className="flex flex-col gap-5">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <div className="col-span-2">
          <main className="mb-32 flex flex-col gap-5">
            <CardSkeleton />
            <CardSkeleton />
          </main>
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-5 p-5 tablet:p-0">
      <DetailRecentBlogPosts />
      <div className="col-span-2">
        <main className="mb-32">
          <p className="text-sm text-violet font-semibold">{post.date}</p>
          <h1 className="text-3xl font-bold my-5">{post.title}</h1>
          <div className="grid gap-3">
            {parse(DOMPurify.sanitize(post.content))}
          </div>
        </main>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default BlogDetail;
