# quasar-learning
Messy repo for learning Quasar


## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Start the app in electron (DEV)
```bash
quasar dev -m electron
```

### Build the app to Windows
- Edit `quasar.conf.js` at packager under electron arrays and add `platform : 'win32'`
- Run :
```bash
quasar build -m electron
```
- This will build .exe file with electron, you can run it on Windows machine / VM
- If error occured while building the Windows app, try to delete `node_modules` folder and re-run the command


### Start the app for mobile devices
**Android**
- Make sure you have Android Virtual Device Manager (Emulator)
- Run the emulator
- run :
```bash
quasar dev -m cordova -T android
```

**iOS**
```bash
quasar dev -m cordova -T ios
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
