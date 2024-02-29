import React from "react";
import { Helmet } from "react-helmet-async";
import { SEOMetaType } from "../types/SEOMeta";

export const SEOMeta = ({
  title,
  description,
  type = "webapp",
  name,
  image,
}: SEOMetaType) => {
  return (
    <Helmet async>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {name && <meta name="twitter:creator" content={name} />}
      {type && <meta name="twitter:card" content={type} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};
