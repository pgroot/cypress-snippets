module.exports = (on, config) => {
    config.browsers.push({
        name: 'brave',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Brave',
        version: '99.1.36.116',
        path: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
        majorVersion: 99
    });
    
    return {
        // browsers: config.browsers.filter((b) => b.channel === 'stable'),
        browsers: config.browsers.filter((b) => b.family === 'chromium'),
    }
}  