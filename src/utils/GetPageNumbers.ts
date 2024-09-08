
/**
 * Generates an array of page numbers based on the current page and total number of pages.
 *
 * The function returns an array of page numbers that should be displayed, including the first and last pages, and ellipses if there are more pages than can be displayed.
 *
 * @param currentPage - The current page number.
 * @param totalPages - The total number of pages.
 * @returns An array of page numbers to be displayed.
 */
const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pageNumbers = [];
  const rangeStart = Math.max(1, currentPage - 2);
  const rangeEnd = Math.min(totalPages, currentPage + 2);

  if (rangeStart > 1) {
    pageNumbers.push(1);
    if (rangeStart > 2) {
      pageNumbers.push('...');
    }
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pageNumbers.push(i);
  }

  if (rangeEnd < totalPages) {
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push('...');
    }
    pageNumbers.push(totalPages);
  }
  return pageNumbers;
};
export default getPageNumbers;
