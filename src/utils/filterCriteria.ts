/**
 * Defines the available filter criteria for sorting and filtering content.
 * The `popularity` filter criteria include various sorting options based on
 * different attributes such as first air date, name, original name, popularity,
 * vote average, and vote count.
 * The `language` filter criteria include options for filtering content by
 * English, Spanish, and French languages.
 */
export const filterCriteria = [
  {
    name: "popularity",
    queryKey: "sort_by",
    options: [
      { "value": "first_air_date.asc", "label": "First Air Date (Ascending)" },
      { "value": "first_air_date.desc", "label": "First Air Date (Descending)" },
      { "value": "name.asc", "label": "Name (A to Z)" },
      { "value": "name.desc", "label": "Name (Z to A)" },
      { "value": "original_name.asc", "label": "Original Name (A to Z)" },
      { "value": "original_name.desc", "label": "Original Name (Z to A)" },
      { "value": "popularity.asc", "label": "Popularity (Ascending)" },
      { "value": "popularity.desc", "label": "Popularity (Descending)" },
      { "value": "vote_average.asc", "label": "Vote Average (Lowest to Highest)" },
      { "value": "vote_average.desc", "label": "Vote Average (Highest to Lowest)" },
      { "value": "vote_count.asc", "label": "Vote Count (Ascending)" },
      { "value": "vote_count.desc", "label": "Vote Count (Descending)" }
    ],

  },
  {
    name: "language",
    queryKey: "language",
    options: [
      { "value": "en-en", "label": "English" },
      { "value": "ar-ar", "label": "Arabic" },
      { "value": "fr-fr", "label": "French" }
    ]
  }
]
