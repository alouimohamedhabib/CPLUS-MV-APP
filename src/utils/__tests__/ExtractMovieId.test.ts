import extractMovieId from '../ExtractMovieId';

describe('extractMovieId', () => {
  it('should extract movie ID from a valid URL', () => {
    const result = extractMovieId('The-Matrix-1999-123');
    expect(result).toBe('123');
  });

  it('should handle URL with multiple hyphens', () => {
    const result = extractMovieId('The-Lord-of-the-Rings-The-Fellowship-of-the-Ring-2001-456');
    expect(result).toBe('456');
  });

  it('should return "/" for an empty URL', () => {
    const result = extractMovieId('');
    expect(result).toBe('/');
  });

  it('should handle URL without hyphens', () => {
    const result = extractMovieId('789');
    expect(result).toBe('789');
  });

  it('should handle URL with only one part', () => {
    const result = extractMovieId('SinglePart');
    expect(result).toBe('SinglePart');
  });

  it('should handle URL with trailing hyphen', () => {
    const result = extractMovieId('Movie-Title-2023-101-');
    expect(result).toBe('');
  });

  it('should handle URL with leading hyphen', () => {
    const result = extractMovieId('-Movie-Title-2023-202');
    expect(result).toBe('202');
  });
});
