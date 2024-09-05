import MovieLinkOptimizer from "../MovieLinkOptimizer";

describe('MovieLinkOptimizer', () => {
  it('should create a valid link with normal input', () => {
    const result = MovieLinkOptimizer('The Matrix', 123, '1999-03-31');
    expect(result).toBe('The-Matrix-1999-123');
  });

  it('should handle movie titles with special characters', () => {
    const result = MovieLinkOptimizer('Alien: Covenant', 456, '2017-05-19');
    expect(result).toBe('Alien-Covenant-2017-456');
  });

  it('should handle movie titles with multiple spaces', () => {
    const result = MovieLinkOptimizer('The   Lord   of   the   Rings', 789, '2001-12-19');
    expect(result).toBe('The-Lord-of-the-Rings-2001-789');
  });

  it('should handle movie titles with numbers', () => {
    const result = MovieLinkOptimizer('2001: A Space Odyssey', 101, '1968-04-03');
    expect(result).toBe('2001-A-Space-Odyssey-1968-101');
  });

  it('should handle movie titles with non-alphanumeric characters', () => {
    const result = MovieLinkOptimizer('Who Am I (2014)', 202, '2014-09-25');
    expect(result).toBe('Who-Am-I-2014-2014-202');
  });

  it('should handle empty movie title', () => {
    const result = MovieLinkOptimizer('', 303, '2022-01-01');
    expect(result).toBe('-2022-303');
  });

  it('should handle release date with only year', () => {
    const result = MovieLinkOptimizer('Test Movie', 404, '2023');
    expect(result).toBe('Test-Movie-2023-404');
  });
});
