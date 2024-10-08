"use client"
import { useSearch } from "@/app/useSearch"
import MovieSuggession from "@/components/molecules/MovieSuggession"
import SearchForm from "@/components/molecules/SearchForm"
import { useCallback, useEffect, useState } from "react"
import { IoSearchCircleOutline } from "react-icons/io5"

function Search() {
  const { debouncedKeyword, keyword, movies, isLoading, setMovies } = useSearch()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.querySelector('input[type="search"]')
        if (searchInput instanceof HTMLInputElement) {
          searchInput.focus()
        }
      }, 0)
    }
  }

  const hideSearch = useCallback(() => {
    setIsSearchOpen(false)
    setMovies(undefined)
    debouncedKeyword('')
  }, [debouncedKeyword, setMovies])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      hideSearch()
    }
  }, [hideSearch])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => { }
  }, [handleKeyDown])

  return (
    <div className="text-white">
      <IoSearchCircleOutline
        className="text-3xl cursor-pointer"
        onClick={toggleSearch}
      />
      {isSearchOpen && (
        <div className="wrapper flex fixed top-0 left-0 right-0 bottom-0 flex-col items-center justify-start  pt-12 px-4 z-40 bg-slate-900 bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={hideSearch}
          >
            ×
          </button>
          <SearchForm callback={debouncedKeyword} isLoading={isLoading} />
          {movies?.length ? <MovieSuggession movies={movies} resetOnClick={hideSearch} /> : ''}
        </div>
      )}
    </div>
  )
}

export default Search
