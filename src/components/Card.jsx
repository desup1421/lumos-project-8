import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import arrowUpRightBlack from "../assets/icons/arrow-up-right-black.svg";

const Card = ({ post, className }) => {
  // Navigate to the blog detail page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${post.key}`);
  };
  
  return (
    <div
      onClick={handleClick}
      data-cy="post-card"
      className={`grid ${className} tablet: gap-5 hover:scale-[0.9] transition-transform cursor-pointer overflow-hidden`}
    >
      <div className="w-full">
        <img
          className="object-cover w-full h-full"
          src={post?.thumb}
          alt={post?.title}
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-sm text-violet font-bold">{post?.time}</p>
        <h3 className="font-bold text-xl flex justify-between">
          <span>{post?.title}</span>
          <img src={arrowUpRightBlack} alt="arrow up rigt icon" />
        </h3>
        <p className="text-text line-clamp-3">{post?.desc}</p>
        <div className="flex gap-2">
          <p className="text-sm px-2 bg-violet-background text-violet font-semibold  rounded-full">
            {post?.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
};
export default Card;
