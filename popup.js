console.debug('Popup JS loaded');

const appLogo = browser.runtime.getManifest().icons['48'];
const appVersion = browser.runtime.getManifest().version;
const appName = browser.runtime.getManifest().name;
const logoElement = document.getElementById('extLogo');
const versionElement = document.getElementById('extVersion');
const nameElement = document.getElementById('extName');

nameElement.textContent = appName;
versionElement.textContent = appVersion;
