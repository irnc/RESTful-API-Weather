# Weather app
### Description
Weather - it is a simple application that will help you in situations when you need to know the weather for the current or future time.
The app will also help you with the selection of suitable clothing for the current weather, so you can feel comfortable.
Also, students will were present reminder of the weather at the beginning and end of the lesson.

### Getting the weather forecast:
##### By city name at current moment:
- GET: **/weather/{city name}/current**

##### By city name at the future time on 5 days:
- GET: **/weather/{city name}/future/days**

##### By city name at the future time on 3 hours:
- GET: **/weather/{city name}/future/hours**

### About notifications:
You will get notifications in your browser about weather at the beginning of the lesson and at the end of the lesson.
Notification will show you current weather (temperature, wind, recommended outfit).
At this time app will remind you about weather at strongly time intervals (GRSU timetable. Example: 8:30 AM , 9:50 AM).