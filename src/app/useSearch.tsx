/**
 * A custom React hook that provides search-related functionality, including a debounced keyword state and a handler for search input changes.
 *
 * @returns An object containing the current search keyword, a debounced version of the keyword, and a function to handle search input changes.
 */
import { searchMovies } from '@/adapter/MovieService';
import { normalizeMovieData } from '@/adapter/Normalizers';
import { TMovie } from '@/domains/entities/Movie';
import Debouncer from '@/utils/Debouncer';
import { useState, useCallback, useEffect } from 'react';

export function useSearch() {
  const [keyword, setKeyword] = useState<string>('')
  const [movies, setMovies] = useState<TMovie[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearchTyping = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target) {
      setMovies(undefined);
      setIsLoading(false);
      return;
    }
    setKeyword(e.target.value);
    setIsLoading(true);
  }, []);

  const debouncedKeyword = Debouncer(handleSearchTyping, 1500);

  const fetchMovies = useCallback(async (searchKeyword: string) => {
    if (searchKeyword.trim() === '') {
      setMovies(undefined);
      setIsLoading(false);
      return;
    }

    try {
      const response = await searchMovies(searchKeyword);
      setMovies(response.results.map(normalizeMovieData));
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies(undefined);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(keyword);
  }, [keyword, fetchMovies]);

  return {
    keyword,
    debouncedKeyword,
    handleSearchTyping,
    movies,
    isLoading,
    setMovies
  };
}
