import React from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ Ndata }) => {
  if (!Ndata) return null; // Return nothing if Ndata is undefined

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
      {/* Image */}
      {Ndata?.image_url && (
        <img
          src={Ndata.image_url}
          alt={Ndata.title || "News Image"}
          className="w-full h-64 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        {Ndata?.title && (
          <h2 className="text-2xl font-bold mb-2">{Ndata.title}</h2>
        )}

        {/* Author Info */}
        {Ndata?.author && (
          <div className="flex items-center gap-3 mb-4">
            {Ndata.author.img && (
              <img
                src={Ndata.author.img}
                alt={Ndata.author.name || "Author"}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              {Ndata.author.name && (
                <p className="text-sm font-semibold">{Ndata.author.name}</p>
              )}
              {Ndata.author.published_date && (
                <p className="text-xs text-gray-500">
                  {new Date(Ndata.author.published_date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 ml-auto text-gray-500">
              <FaEye /> <span>{Ndata?.total_view || 0}</span>
            </div>
          </div>
        )}

        {/* Details */}
        {Ndata?.details && (
          <p className="text-gray-700 mb-4 text-justify">{Ndata.details}</p>
        )}

        {/* Tags */}
        

        {/* Button */}
        <Link to={`/category/${Ndata.category_id}`} className=" flex justify-center items-center bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
         <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
