/* Magic Mirror Config Sample for version 2.8.0
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	// Hass.io specific settings
    address: "", // Empty as running in a docker container.
    port: 8080, // Update port in HASS.IO configuration and not here.
    ipWhitelist: [], // Empty as in docker container, ACL from the host.
	
	
    //
    // The settings below are for a basic setup, please modifiy as needed. 
    //	
	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Milpitas",
				locationID: "5373327",  // Go to https://openweathermap.org/find , search for your city, and copy the 7-digit number in the URL. For example, Milpitas is https://openweathermap.org/city/5373327
				appid: "YOUR_OPENWEATHER_API_KEY" // Create an account and obtain key from https://openweathermap.org/
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Milpitas",
				locationID: "5373327",  // Go to https://openweathermap.org/find , search for your city, and copy the 7-digit number in the URL. For example, Milpitas is https://openweathermap.org/city/5373327
				appid: "YOUR_OPENWEATHER_API_KEY" // Create an account and obtain key from https://openweathermap.org/
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}