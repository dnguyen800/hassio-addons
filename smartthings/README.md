# SmartThings MQTT Bridge Add-on for Hass.io
This add-on will install the latest version of the SmartThings MQTT Bridge by StJohnJohnson.
More details [here](https://github.com/stjohnjohnson/smartthings-mqtt-bridge).

Credit also goes to vkorn and adamfeldman for their original and modified implementations of the add-on.

## Configuration Paramters Explained

| Param          | Description              |
|----------------|--------------------------|
| broker_host    | MQTT broker host         |
| broker_port    | MQTT broker port         |
| username       | MQTT broker username     |
| password       | MQTT broker password     |
| preface        | Preface for topics       |
| state_suffix   | State topics suffix      |
| command_suffix | Command topics suffix    |
| retain_state   | Retain state changes     |
| bridge_port    | Port bridge listening on |

### Configuring the Bridge in the SmartThings Groovy IDE

Use the MAC address of your physical device in the Device Handler configuration.  You can find this address most easily by logging in and viewing the client list of your network router.

If you are having troubles for any reason with one-way communication, where SmartThings reports states properly, but you cannot control SmartThings devices from Home Assistant or MQTT directly, you absolutely MUST edit and save the Smart App you created.  Doing so, forces the bridge to re-subscribe to MQTT so that it can receive published payloads.
