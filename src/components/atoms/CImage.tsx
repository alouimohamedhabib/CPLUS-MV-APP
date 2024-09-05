import Image from "next/image";
import { memo } from "react";

/**
 * A React component that renders an image with lazy loading and responsive sizing.
 *
 * @param {Object} props - The component props.
 * @param {string} props.loading - The loading attribute for the image.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @param {string} props.className - The CSS class name for the image.
 * @returns {JSX.Element} - The rendered image component.
 */


function CImage({
  src, alt, loading = "lazy", width = 2000, height = 2000, className, fill
}: { src: string, alt: string, loading?: "lazy" | "eager" | undefined, width?: number, height?: number, className?: string, fill?: boolean }) {
  return (
    <Image
      loading={loading}
      src={src}
      alt={alt ?? "poster"}
      width={width}
      height={height}
      className={className}
    />
  )
}
export default memo(CImage)
