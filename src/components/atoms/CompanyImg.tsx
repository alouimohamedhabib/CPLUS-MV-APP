import { memo } from "react";
import CImage from "./CImage";

/**
 * Renders a company image with the specified source and alt text.
 *
 * @param imgSrc - The URL of the image to display.
 * @param alt - The alt text to display if the image cannot be loaded.
 * @returns A React component that displays the company image.
 */
function CompanyImg({ imgSrc, alt, className }: { imgSrc: string, alt: string, className?: string }) {
  return <CImage
    className={className}
    src={imgSrc}
    alt={alt}
    height={100}
    width={300}
    
  />
}

export default memo(CompanyImg)
