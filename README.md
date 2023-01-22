# MyReads:- Book Tracking app

## Table of contents

- [Overview](#overview)
  - [About](#about)
  - [Links](#links)
  -[Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### About

This is a SPA(single-page-application) and it represents a virtual book shelves to store your books and track what you're reading. MyReads lets you manage your digital bookshelf. It supports three shelves are:

- Currently Reading.
- Want To Read.
- Read.

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Screenshots

![screenshot](./src/assets/screencapture-1.png)
![screenshot](./src/assets/screencapture-2.png)

## My process

I created the app from scratch with `create-react-app` and i divided the app to components and two views and each view have specific components functionality, the app communicate with a Backend Server from Udacity for book information and long term storage.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### Backend Server

The provided file `BooksAPI.js` contains following methods to perform necessary operations on the backend:
-`getAll()` for getting all your books.
-`update()` for updating shelf.
-`search()` for searching books while typing in input field.
-`get()` for getting book details
