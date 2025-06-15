<div style="text-align: center;">
    <image align="center" src="./public/favicon-dark.png">
    <p style="font-size: 40px; font-weight: bold; display: block; margin-bottom: 30px; padding: 0;">React Router <span>Lite</span></p>
</div>

# Single Page Application (SPA) Routing Methods Comparison

This table provides a concise comparison of the two primary client-side routing methods for Single Page Applications (SPAs): **Location Hash** and **HTML History API**.

| **Feature**                | **Location Hash (#/path)**                                                                   | **HTML History API (/path)**                                                                                      |
| :------------------------- | :------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Ease of Implementation** | Easier to implement                                                                          | Relatively more complex.                                                                                          |
| **URL Appearance**         | Uses `#` (hash fragment) in the URL (e.g., `example.com/#/about`)                            | Clean URLs without `#` (e.com/about)                                                                              |
| **SEO Friendliness**       | Poor; Search engines typically ignore the hash fragment.                                     | Excellent; URLs are fully indexable by search engines.                                                            |
| **Server Requirement**     | No special server configuration needed (hash is client-side only).                           | Requires server-side fallback/catch-all to serve `index.html` for all relevant paths.                             |
| **Browser History**        | Supports back/forward buttons, but only for hash changes.                                    | Full browser history support, feels like traditional navigation.                                                  |
| **URL Sharing/Bookmarks**  | Less intuitive due to the `#`; can be misunderstood.                                         | Clean and natural; easily shared and and bookmarked.                                                              |
| **Performance Impact**     | Minimal, as no server request is made on hash change.                                        | Minimal after initial load, as no full page reload occurs.                                                        |
| **JavaScript Events**      | Relies on the `hashchange` event.                                                            | Relies on `popstate` event for back/forward navigation; `pushState`/`replaceState` for programmatic changes.      |
| **Use Cases**              | Simpler internal tools, older browser support, or when server configuration is not possible. | **Recommended for most modern SPAs,** especially those requiring SEO, clean URLs, and a seamless user experience. |
