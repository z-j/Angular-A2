Name: Zohaib Jabbar

###Overview.
The app helps users to keep track of gym and outdoor activities.
Users can add activities which will help users to keep track of both outdoor and
gym exercises.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Users can Add Outdoor Activity
 + Users can add Gym Activity
 + Users can view all previous Activities
 + Users can filter previous Activities
 + Users can view Summarized Data (e.g. total calories burned, total distance e.t.c.)
 + Users can view Summarized graphs

###Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ AngularJS 1.3.0
+ Bootstrap 3
+ Angular-Chart module (http://jtblin.github.io/angular-chart.js/)
+ jquery-1.11.1

###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]


###App Design.

A simple diagram showing the app's component design, in particular controllers and services.

![][image2]

###UI Design.

. . . . . Screenshots of app

![][image5]
Add Activity Page (Users can add either outdoor or gym activity)
![][image7]
View/Filter Outdoor Activities page
![][image9]
View/Filter Gym Activities
![][image10]
View Activities Summaries in Tabular format
![][image11]
View Activities Summaries in Graphical format


###Routing.

+ /myActivities - displays all activities if user is logged in. (outdoor vs gym activities data is displayed without url being changed)
+ /ActivitiesSummary - detail summaries of activities, in tabular or graphical format, if user is logged in
+ /addActivity - user can add activity after logging in


###Extra features

+ Users can register by filling a simple form
+ Users can log in / log out
+ Users can be assinged different roles and thus access to pages can be restricted in a simple way

## Web API Endpoint Reference

Describe your web API.

| HTTP Verb and Path |  Description |
| -------- | -------- |
| GET:  /api/users | return list of all users |
| PUT:  /api/users/:id | updates the user with given id |
| POST: /api/users | create a new user |
| DELETE: /api/users/:id | delete the user with given id |
| GET:  /api/activities | return list of all activities |
| PUT:  /api/activities/:id | updates the activity with given id |
| POST: /api/activities | create a new activity |
| DELETE: /api/activities/:id | delete the activity with given id |
| POST: /api/authenticate/ | returns the token, {username: uname, pwd: pwd} |
| GET:  /api/activities/:token | return list of all activities, if token is valid |

###Independent learning.

+ Interceptors in Angular
+ Broadcast custom Events
+ retrieving data from json files
+ using Charts.js module of angular

[image1]: ./img/model.png
[image2]: ./img/design.png
[image5]: ./img/sc3.png
[image6]: ./img/sc4.png
[image7]: ./img/sc5.png
[image9]: ./img/sc7.png
[image10]: ./img/sc8.png
[image11]: ./img/sc9.png

###Sources
+ Login Suggestions: https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec#.v0ik5ej65
