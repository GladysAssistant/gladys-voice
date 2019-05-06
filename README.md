Gladys Voice Recognition Engine
=======================

This simple module allows you to speak to gladys. More informations about Gladys on [our website](https://gladysproject.com).

It uses snowboy to detect the hotword "Gladys", and then it streams your voice to a speech recognition service.

For now it only support Google Cloud Speech.

## Installation

First, you need to install a few dependencies : 

### For linux : 

```
sudo apt-get install sox libsox-fmt-all libatlas-base-dev mpg321
```

### For macOS

```
brew install sox
````

Then, install this module on your machine (Raspberry Pi, any linux or Mac) :

**Note :** You need Node.js >= v6

```
npm install gladys-voice
```

Then go to the folder where it has been installed : 

```
cd node_modules/gladys-voice
```

### Creating a Google Project 

Go to the [Google Cloud Console](https://console.developers.google.com). 

- Create an account if you don't have one, and create a project.
- In the `Library` panel in your project, activate the `Google Cloud Speech API`.
- Then, you need to activate billing on your account. Unfortunately, it's not possible to use the service without having a credit card saved. 
Note that it won't take you money, you have a bunch of free requests and as you are alone on your project, it will certainly be enough without paying.
- Go to the `Credentials` panel, create new credentials, select `Key` and create a JSON key.
- Put this JSON key file in your `data` folder in the `gladys-voice` folder of your installation.


### Modify the config file

You can know edit the `config.js` file with your informations, or define environment variable (recommended), modify :

- Your Google Project Id
- The path to your Google Key File 
- The URL of your Gladys instance
- Your Gladys access token (You can create an access token in `Parameters` => `Security` in Gladys)

### Start the module

To start the module, two options, for testing you can start it with node : 

```
node app.js
```

For long term usage, prefer using pm2 so that the module will restart in case of crash.

Install PM2 if you don't already have it :

```
npm install -g pm2
```

Then, start the module :

```
pm2 start app.js --name gladys-voice
```

To start the module when your system boot, you can save the current process list by doing:

```
pm2 save
```