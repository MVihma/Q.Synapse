// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    doSomething: () => ipcRenderer.invoke('do-something'),
    onSomething: (callback) => ipcRenderer.on('something', (event, data) => callback(data))
});