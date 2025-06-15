<div align="center">
    <img src="./public/favicon-dark.png" alt="React Router Lite Logo">
    <h1 style="font-size: 40px; font-weight: bold; margin-bottom: 50px; padding: 0;">React Router <span style="color: #F44250;">Lite</span></h1>
</div>

React Router Lite is a simple React router for Single Page Applications (SPA's) that uses the Location Hash (#/) method for routing. I created this project from the motivation of diving deep into how client-side routing works in SPA's.

## 🧾 Table of Content<a id="table-of-content"></a>

- [Overview](#overview)

  - [Why React Router Lite? My Motivation](#why-react-router-lite)
  - [Available Solutions](#available-solutions)
  - [Location Hash vs History API Comparison Table](#comparison-table)
  - [Decision](#decision)

- [Project Details](#project-details)

  - [Folder Structure](#folder-structure)

- [What I learned](#my-learnings)

## 📝 Overview<a id="overview"></a>

### Why React Router Lite? My Motivation<a id="why-react-router-lite"></a>

As a React developer, I often find myself working on Single Page Applications (SPAs) that require client-side routing. The go to solution for client-side routing is [React Router DOM](https://reactrouter.com/) - The most popular and widely used routing library for React.

So, very often I end up using React Router and always wondered how it works under the hood. Recently I was reading the official documentation of React Router DOM and got amazed by how this package made it easy to **handle state** and **managing CRUD operations** and most of the dev just don't know about it, even I didn't know. So, I decided I will learn how these amazing technology works I use every day.

### Available Solutions<a id="available-solutions"></a>

From my study, I found that there are two primary client-side routing methods for Single Page Applications (SPAs): **Location Hash** and **History API**. Each method has its own advantages and disadvantages. So, I wrote down the comparison table below to choose one.

### Location Hash vs History API Comparison Table<a id="comparison-table"></a>

This table provides a concise comparison of the two primary client-side routing methods for Single Page Applications (SPAs): **Location Hash** and **HTML History API**.

| **Feature**                | **Location Hash (#/path)**                                                                   | **HTML History API (/path)**                                                                                      |
| :------------------------- | :------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Ease of Implementation** | Easier to implement                                                                          | Relatively complex.                                                                                               |
| **URL Appearance**         | Uses `#` (hash fragment) in the URL (e.g., `example.com/#/about`)                            | Clean URLs without `#` (e.com/about)                                                                              |
| **SEO Friendliness**       | Poor; Search engines typically ignore the hash fragment.                                     | Excellent; URLs are fully indexable by search engines.                                                            |
| **Server Requirement**     | No special server configuration needed (hash is client-side only).                           | Requires server-side fallback/catch-all to serve `index.html` for all relevant paths.                             |
| **Browser History**        | Supports back/forward buttons, but only for hash changes.                                    | Full browser history support, feels like traditional navigation.                                                  |
| **URL Sharing/Bookmarks**  | Less intuitive due to the `#`; can be misunderstood.                                         | Clean and natural; easily shared and and bookmarked.                                                              |
| **JavaScript Events**      | Relies on the `hashchange` event.                                                            | Relies on `popstate` event for back/forward navigation; `pushState`/`replaceState` for programmatic changes.      |
| **Use Cases**              | Simpler internal tools, older browser support, or when server configuration is not possible. | **Recommended for most modern SPAs,** especially those requiring SEO, clean URLs, and a seamless user experience. |

### Decision<a id="decision"></a>

After understanding the advantages and disadvantages of each method, I decided to go with the **Location Hash** method. The main reason is that it is **easier to implement** which makes it suitable for me to start with. But I promise, **Soon** I will be writing the **History API** version of this project.

## 📁 Project Details<a id="project-details"></a>

### Folder Structure<a id="folder-structure"></a>

```
react-router-lite/
├── public/
│   └── favicon-dark.png
├── src/
│   ├── router-location-hash/   # Core router implementation using hash-based routing
│   │   ├── contexts/           # React contexts for router state management
│   │   ├── hooks/              # Custom hooks for router functionality
│   │   ├── providers/          # Router provider components
│   │   ├── error.jsx           # Error boundary component
│   │   ├── index.js            # Main router exports
│   │   ├── link.jsx            # Link component for navigation
│   │   ├── route.jsx           # Route component for path matching
│   │   └── routes.jsx          # Route configuration and definitions
│   ├── pages/                  # Page components for different routes
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx                 # Root application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.js
```

## 🚀 What I learned<a id="my-learnings"></a>

- How client-side routing works in Single Page Applications (SPAs).
- I learned how to create a handle routing using the Location Hash method.
- An anchor tag `<a>` is used to request a new page from the server, whereas form tags `<form>` are used to both request a new page and submit data.
- Got introduced with the `hashchange` event.
- Learned different methods from React (e.g. `Children.toArray()`, `React.isValidElement()` etc.).
