module.exports = (on, config) => {
    config.browsers.push({
        name: 'opera',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Opera',
        version: '84.0.4316.42',
        path: 'C:\\Users\\EDIT_ME_WITH_YOUR_USERNAME\\AppData\\Local\\Programs\\Opera\\opera.exe',
        majorVersion: 84
    },
    {
        name: 'brave',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Brave',
        version: '99.1.36.116',
        path: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
        majorVersion: 99
    },
    {
        name: 'vivaldi',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Vivaldi',
        version: '5.1.2567.66',
        path: 'C:\\Users\\EDIT_ME_WITH_YOUR_USERNAME\\AppData\\Local\\Vivaldi\\Application\\vivaldi.exe',
        majorVersion: 5
    },
    {
        name: 'srware iron',
        channel: 'stable',
        family: 'chromium',
        displayName: 'SRWare Iron',
        version: '98.0.5000.0', 
        path: 'C:\\Program Files\\SRWare Iron (64-Bit)\\chrome.exe',
        majorVersion: 98
    });
    
    return config;
}