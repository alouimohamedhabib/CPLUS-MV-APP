import TMaterialToLoad from '@/Types/TMaterialToLoad';
import getPageNumbers from '@/utils/GetPageNumbers';
import Link from 'next/link';
import React, { memo } from 'react';

function Pagination({ currentPage, totalPages, mediaType}: {
  currentPage: number;
  totalPages: number;
  mediaType?: TMaterialToLoad,
}) {

  return (
    <div className="flex justify-center items-center my-10">
      {getPageNumbers(currentPage, totalPages).map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === '...' ? (
            <span className="mx-1">...</span>
          ) : (
            <Link
              href={'/movies' + (mediaType ? '?f=' + mediaType : '') + (pageNumber !== 1 ? '&page=' + pageNumber : '')}
              className={`w-10 h-10 flex justify-center items-center rounded-full border-none mx-1 text-sm cursor-pointer transition-all duration-300 ease-in-out
                ${pageNumber === currentPage
                  ? 'bg-red-500 text-white hover:bg-red-700'
                  : 'bg-gray-100 text-red-500 hover:bg-gray-200'
                }`}
            >
              {pageNumber}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default memo(Pagination);
