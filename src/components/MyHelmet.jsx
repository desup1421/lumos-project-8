import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const MyHelmet = ({title, desc, img}) => {
    const location = useLocation();
    const link = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
    console.log(link);
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={desc}
      />
      {/* META OPEN GRAPH  */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={desc}
      />
      <meta
        property="og:image"
        content={img}
      />
      <meta property="og:url" content={link} />

      {/* < META TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={desc}
      />
      <meta
        name="twitter:image"
        content={img}
      />
    </Helmet>
  );
};
MyHelmet.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
}

export default MyHelmet;