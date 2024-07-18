# Movie Search App

This project is a React application that allows users to search for movies using the Open Library Search API and displays the results as cards, each with a random dog image from the Dog CEO API. The application features a search bar, dynamic data fetching, and a loading spinner for improved user experience.


## Features

- Search for movies using the Open Library Search API.
- Display search results as cards with movie details.
- Fetch and display random dog images from the Dog CEO API.
- Loading spinner while fetching data.
- Responsive and aesthetic design using CSS modules.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Components
- App:
  
The main entry point of the application. Renders the header and the MovieSearchApp component.

- MovieSearchApp:
  
Handles the search functionality and state management for movies and loading status. Renders the SearchBar and MovieCard components.

- SearchBar:
  
A simple input and button component for entering and submitting search queries. Calls the onSearch prop function when a search is initiated.

- MovieCard:

Displays individual movie details along with a random dog image. Uses the react-spinners library to show a loading spinner while fetching the dog image.

## API
Open Library Search API: Used to search for movies.
Endpoint: https://openlibrary.org/search.json?q=
Dog CEO API: Used to fetch random dog images.
Endpoint: https://dog.ceo/api/breeds/image/random

## Installation

Clone the repository:

   ```bash
   git clone https://github.com/kkr-97/movie-search-app.git
   cd movie-search-app

