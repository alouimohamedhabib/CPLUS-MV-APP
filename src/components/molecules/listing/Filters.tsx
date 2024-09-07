"use client"
import { memo, SetStateAction, useCallback, useEffect } from "react"

import { useState } from 'react'
import {  useRouter, useSearchParams } from 'next/navigation'
import TMaterialToLoad from "@/Types/TMaterialToLoad"
import SelectOption from "@/components/atoms/SelectOption"
import { filterCriteria } from "@/utils/filterCriteria"

function Filters({ materialType = "movieList" }: { materialType?: TMaterialToLoad }) {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState<{ value?: string; label?: string }>()
  const params = useSearchParams()
  useEffect(() => {
    function handleFiltersUiMatching() {
      setSelectedFilter(prev => {
        const sort_by = params.get('sort_by')
        const language = params.get('language')
        if (!sort_by && !language) {
          return
        }
        return { ...prev, sort_by, language }
      })
    }
    handleFiltersUiMatching()
  }, [params])

  const handleFilterState = useCallback((queryKey: string, value: string) => {

    setSelectedFilter((prev: SetStateAction<{ value?: string; label?: string } | undefined>) => {
      return { ...prev, [queryKey]: `${value}` }
    })
  }, [])

  const prepareFilterToUrl = () => {
    if (selectedFilter === null || selectedFilter === undefined) {
      return ''
    }
    const queryParams = new URLSearchParams()
    if (materialType) {
      queryParams.append('f', materialType)
    }
    if (selectedFilter) {
      Object.entries(selectedFilter).forEach(([key, value]) => {
        queryParams.append(key, value)
      })
    }
    return queryParams.toString()
  }

  const handleFilterChange = () => {
    router.push(`/movies?${prepareFilterToUrl()}`)
  }
  return (
    <div className="flex gap-4 my-4 content-end justify-end">
      {filterCriteria.map((filter, index) => <SelectOption activeSelection={selectedFilter} key={index} name={filter.queryKey} data={filter.options} onSelect={handleFilterState} />)}
      <button onClick={handleFilterChange} className="border border-gray-50 p-2 hover:bg-red-500 hover:border-red-700 ">Apply Filters</button>
    </div>
  )
}

export default memo(Filters)


