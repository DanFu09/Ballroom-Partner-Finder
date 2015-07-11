# ATTHackathon

This is our README!
# Ballroom-Partner-Finder

This will be an app to help ballroom dancers find partners!

# Set-up

This is a PhoneGap app, so you need PhoneGap installed to run it as a mobile app:

```
sudo npm install -g phonegap

cd app

cordova prepare 
(If does not work, type:
cordova platform add ios)

cordova run ios
(If does not work, type:
sudo npm install -g ios-sim)
```

To serve up the web page locally, just use any server that can serve HTML; for my purposes, I'm using the Node http-server.  The backend is currently just a Parse backend.

To run a local HTTP server:

```
sudo npm install -g http-server
cd app
http-server -o --cors
```