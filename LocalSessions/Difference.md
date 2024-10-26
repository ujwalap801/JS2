In JavaScript, localStorage and sessionStorage are two types of Web Storage APIs that allow storing data on the client-side (in the browser) in key-value pairs. Here's a comparison of the two:

1. localStorage

Persistence: Data stored in localStorage has no expiration time, meaning it remains available until it is explicitly deleted by the user or the application, even after the browser or device is closed and reopened.

Scope: localStorage is accessible across all windows, tabs, and browser instances for the same origin (same domain and protocol).

Storage Limit: Typically around 5-10 MB, depending on the browser.

Usage:

// Setting an item
localStorage.setItem("key", "value");

// Getting an item
let value = localStorage.getItem("key");

// Removing an item
localStorage.removeItem("key");

// Clearing all data
localStorage.clear();


2. sessionStorage

Persistence: Data in sessionStorage is only available for the duration of the page session. Once the tab or window is closed, the data is cleared.

Scope: sessionStorage is limited to the specific window or tab. It is not shared between tabs, even if they are from the same origin.

Storage Limit: Usually around 5 MB, depending on the browser.

Usage:

// Setting an item
sessionStorage.setItem("key", "value");

// Getting an item
let value = sessionStorage.getItem("key");

// Removing an item
sessionStorage.removeItem("key");

// Clearing all data
sessionStorage.clear();

