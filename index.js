const Downloader = require('nodejs-file-downloader');

(async () => {
    const downloader = new Downloader({
        url: "http://212.183.159.230/200MB.zip",
        directory: "./downloads",
        onProgress: function (percentage, chunk, remainingSize) {
            console.log('%', percentage);
            console.log("Current chunk of data", chunk);
            console.log("Remainin bytes: ", remainingSize);
        },
    });
    try {
        await downloader.download();

        console.log('All Done')
    } catch (error) {
        console.log("Download failed", error)
    }
})();
