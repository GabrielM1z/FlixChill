# FlixChill

FlixChill is an Angular-based web application that aims to provide a similar experience to Netflix, allowing users to discover and watch their favorite movies and TV shows.

The meaning of this project is to use and create an API to communicate with the front.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a wide range of movies and TV shows.
- Search for specific movies or TV shows.
- View detailed information about a selected movie or TV show.
- Create a watchlist to save content for later viewing.
- User authentication and account management.



## Technologies

The following technologies are used in this project:

- Angular (HTML, CSS, JavaScript TypeScript)
- Python

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/GabrielM1z/flixchill.git`
2. Navigate to the project directory: `cd flixchill`
3. Install the dependencies: `npm install`


If you go to app.component.ts and change Prague to Tokyo in this.apiService.getBackgroundTheme(encodeURIComponent('Prague')) :

![image](https://github.com/GabrielM1z/FlixChill/assets/100167018/7a53d6be-9f1f-4a43-b3b3-81c111727014)

And Tokyo to Prague : 

![image](https://github.com/GabrielM1z/FlixChill/assets/100167018/7639525d-98c5-4be6-b32a-0296770c2547)

## Usage

After installing the dependencies, you can start the development server:

```bash
npm start

Start the application :

```bash
ng serve

## Installation API

1. Dl the requierement.txt with pip (pip install <lib>)
2. Go in the folder API/src
3. up the server for API, cmd : uvicorn main:app --reload
4. Know we can request the API

