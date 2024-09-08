"use client"
import { memo, SetStateAction, useCallback, useEffect } from "react"

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TMaterialToLoad from "@/Types/TMaterialToLoad"
import SelectOption from "@/components/atoms/SelectOption"
import { filterCriteria } from "@/utils/filterCriteria"

function Filters({ materialType = "movieList" }: { materialType?: TMaterialToLoad }) {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState<{ value?: string; label?: string }>({})
  const params = useSearchParams()
  useEffect(() => {
    function handleFiltersUiMatching() {
      setSelectedFilter(prev => {
        const sort_by = params.get('sort_by')
        const language = params.get('language')
        if (!sort_by && !language) {
          return prev
        }
        return { ...prev, sort_by, language }
      })
    }
    handleFiltersUiMatching()
  }, [params])

  const handleFilterState = useCallback((queryKey: string, value: string) => {
    if (!queryKey || !value) {
      setSelectedFilter(prev => {
        const newState = { ...prev }
        delete newState[queryKey as keyof typeof selectedFilter]
        return newState
      })
      return
    }

      setSelectedFilter((prev) => {
        return { ...prev, [queryKey]: value }
      })
  }, [])

  const prepareFilterToUrl = () => {
    const queryParams = new URLSearchParams()
    if (materialType) {
      queryParams.append('f', materialType)
    }
    Object.entries(selectedFilter).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value)
      }
    })
    return queryParams.toString()
  }

  const handleFilterChange = () => {
    const url = prepareFilterToUrl()
    if (!url) {
      return
    }
    router.push(`/movies?${url}`)
  }
  return (
    <div className="flex flex-wrap my-4 content-end justify-end">
      {filterCriteria.map((filter, index) => <SelectOption activeSelection={selectedFilter} key={index} name={filter.queryKey} data={filter.options} onSelect={handleFilterState} />)}
      <button onClick={handleFilterChange} disabled={!Object.keys(selectedFilter).length} className={`${!Object.keys(selectedFilter).length && 'opacity-35'}   disabled:opacity-6 border border-gray-50 p-2 ml-2 hover:bg-red-500 hover:border-red-700`}>Apply Filters</button>
    </div>
  )
}
export default memo(Filters)


