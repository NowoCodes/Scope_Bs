// Register my service worker
if('serviceWorker' in navigator) {
    // If the property "serviceWorker" exists on the navigator global object...
    window.addEventListener('load', () => {
        // /...on window load...
        navigator.serviceWorker
        // ...register the service worker
            .register('./sw.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}