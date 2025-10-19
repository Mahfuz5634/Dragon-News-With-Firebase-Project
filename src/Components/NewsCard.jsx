import React from "react";
import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ data }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      
      {/* News Image */}
      {data.image_url && (
        <figure>
          <img
            src={data.image_url}
            alt={data.title || "News Image"}
            className="w-full h-48 object-cover"
          />
        </figure>
      )}

      <div className="card-body p-4">
        {/* Top Row: Badge + Views */}
        <div className="flex justify-between items-center mb-2">
          {data.rating?.badge ? (
            <span className="badge badge-primary capitalize">
              {data.rating.badge}
            </span>
          ) : (
            <span className="badge badge-secondary">No Badge</span>
          )}

          <span className="text-sm text-gray-500 flex items-center gap-1">
            <FaEye /> {data.total_view || 0}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold mb-2">
          {data.title || "No Title"}
        </h2>

        {/* Author Info */}
        {data.author && (
          <div className="flex items-center gap-3 mb-2">
            {data.author.img && (
              <img
                src={data.author.img}
                alt={data.author.name || "Author"}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-sm font-semibold">{data.author.name || "Unknown Author"}</p>
              <p className="text-xs text-gray-500">
                {data.author.published_date
                  ? new Date(data.author.published_date).toLocaleDateString()
                  : "Unknown Date"}
              </p>
            </div>
          </div>
        )}

        {/* Rating */}
        {data.rating?.number && (
          <p className="text-accent font-semibold mb-2">
            Rating: {data.rating.number} ⭐
          </p>
        )}

        {/* Short Details */}
        <p className="text-gray-700 mb-4">
          {data.details ? data.details.slice(0, 120) + "..." : "No details available."}
        </p>

        {/* Tags */}
        {data.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-outline lowercase">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link to={`/news-details/${data.id}`} className="btn btn-sm ">Read More</Link>

          <div className="flex gap-2">
            <button className="btn btn-sm   flex items-center gap-1">
              <FaShareAlt /> Share
            </button>
            <button className="btn btn-sm  flex items-center gap-1">
              <FaBookmark /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
