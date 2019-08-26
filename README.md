## Pre-built images

### Fork of [SmartThings](https://github.com/thewilliambond/hassio-addons/tree/master/smartthings) add-on 

This is a fork of @thewilliambond [SmartThings](https://github.com/thewilliambond/hassio-addons/tree/master/smartthings) add-on, which is a fork of the original Hass.io add-on for the wonderful SmartThings MQTT Bridge -- https://github.com/stjohnjohnson/smartthings-mqtt-bridge

This Hass.io add-on updates the `config.json` file to add the `arch` values missing. Without it, the add-on will not run due to this error:

> 19-06-23 15:39:45 WARNING (MainThread) [hassio.store.data] Can't read /data/addons/git/66f0e245/smartthings/config.json: required key not provided @ data['arch']. Got None

I updated config.json so this repository should be supported in Home Assistant.

### Fork of Plex add-on
This has a small change in the `plex.sh` file to add the following commands:
```
mount /dev/sda1 /mnt
mount /dev/sda /media
```
These commands will mount the first USB flash drive connected to your Raspberry Pi or whatever device you're running Hassio on. You should be able to access the USB drive in Plex by navigating to the `/media` directory. I don't update this add-on, but it is easy to replicate on the latest version of @frenck Plex add-on.

### Fork of Magic Mirror add-on
This add-on was missing the `arch` values in `config.json`, and also the HASS-Sensor Magic Mirror add-on was causing issues due to not using the Hassio token. I removed those add-ons for now until I find the solution.
