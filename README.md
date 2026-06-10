# WEB103 Project 1 - _OPM Wiki_

Submitted by: **Armin Erika Polanco**

About this web app: **OPM Wiki is a list-based web app that showcases Original Pilipino Music artists. Users can browse a curated collection of OPM artists, view detailed information about each one, and listen to their music via embedded Spotify links.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3001/artists/1` and `localhost:3001/artists/2`**
  - [x] _Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation_
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Artist Spotlight section on the home page that randomly features a different artist on each visit
- [x] Spotify embedded player on the home page spotlight section
- [x] Spotify and website links on each artist detail page
- [x] Animated card hover overlay with sliding name, genre, and info button
- [x] Hero banner on the home page with a CTA to the full artist list
- [x] Dedicated landing page separate from the artist list page

## Video Walkthrough

Here's a walkthrough of implemented required features:

[OPM Wiki Walkthrough](https://i.imgur.com/QPV8B4q.gif)

![OPM Wiki Walkthrough](opm_wiki.gif)

https://imgur.com/a/d3lOWKB

GIF created with ScreenToGif

## Notes

One challenge was managing the client-server relationship between Vite and Express,
particularly getting static files and routes to resolve correctly in the production build.

Planned future improvements include:

- Search and filter functionality on the All Artists page
- Expanded artist detail pages with more images, discography info, and social links

## License

Copyright 2026 Armin Erika Polanco

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
