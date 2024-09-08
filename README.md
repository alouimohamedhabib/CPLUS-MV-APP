> ## Description

This NextJS 14 APP, has three main page

`home` `Listing` `Details`

User can search for movie using the header search button.

User can browse list of movies or tv shows , filter and navigate between.

User can see details of certain movie/tv show

> ## Spin up the project:
>
> j
> Live server: `yarn && yarn dev`

### Docker

#### dev : `make dev`

#### prod : `make prod`

#### Stop containers : `make down`

#### URL `http:localhost:3000`

---

## improvement

- [x] remove @debouncer into a custom hook
- [x] add debouncer to search input
- [x] Direct redirection from auth page when passcode session is valid


## knwon issues

- [ ] Movie card dynamc class "${'lg:w-' + cardWidth + '/12'}" is not always applied correctly
- [x] Responsive issue with Carousel in certain big screens
- [ ] movie card description need small tweaking for arabic language
      --> some movie dosent have arabic description
- [x] sort by filter is not working ( potentially API issue)
- [ ] Lose of filters when changing page
