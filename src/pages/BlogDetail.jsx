import React from "react";
import MyHelmet from "../components/MyHelmet";
import DetailRecentBlogPosts from "../containers/DetailRecentBlogPosts";
import CardSkeleton from "../components/CardSkeleton";
import SubscribeForm from "../components/SubscribeForm";
import { useLocation } from "react-router-dom";
import { useGetPostDetailQuery } from "../redux/slices/blogSlice";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { pathname } = useLocation();
  const key = pathname.replace("/blog/", "");
  const { data, isLoading, isError } = useGetPostDetailQuery(key);
  const post = data?.results;
  const { data: dataRedux } = useSelector((state) => state.data);

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <MyHelmet
        title={dataRedux.title}
        desc={dataRedux.desc}
        img={dataRedux.thumb}
      />
      <div className="grid grid-cols-3 gap-5 p-5 tablet:p-0">
        <DetailRecentBlogPosts />
        {isLoading ? (
            <div className="col-span-2 mt-12">
              <main className="mb-32 flex flex-col gap-5">
                <CardSkeleton />
                <CardSkeleton />
              </main>
            </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default BlogDetail;
