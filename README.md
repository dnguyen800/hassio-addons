## Pre-built images

## Fork of [SmartThings](https://github.com/thewilliambond/hassio-addons/tree/master/smartthings) add-on 

This is a fork of @thewilliambond [SmartThings](https://github.com/thewilliambond/hassio-addons/tree/master/smartthings) add-on, which is a fork of the original Hass.io add-on for the wonderful SmartThings MQTT Bridge -- https://github.com/stjohnjohnson/smartthings-mqtt-bridge

This Hass.io add-on requires updates to the config.json due to this error:

> 19-06-23 15:39:45 WARNING (MainThread) [hassio.store.data] Can't read /data/addons/git/66f0e245/smartthings/config.json: required key not provided @ data['arch']. Got None

I updated config.json so this repository should be supported in Home Assistant.
