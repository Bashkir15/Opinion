## About Opinionated 0.1.0

Opinionated is a small, work-in-progress bulliten board system similar to Reddit or Hackernews, but has a more social focus and a harsher implementation of votes and score. Right now it has just been released in a very very basic first beta stage. There will be vastly many improvements to come. To see the site live, [please visit it.](https://opinionate.herokuapp.com)

## Issues

Being the very first beta release, threre are bound to be some known issues that will be addressed later. Most of these shouldn't affect your interaction with the site too much, but it helps if something goes wrong for you

1. File uploads don't display pictures properly. The uploads themselves work, but until I move to Amazon S3 or set up a proxy in front of Node (both are on the todo list) they will not be displayed.

2. The update profile forms reset filled in fields when they are submitted empty, this is a simple fix so it should be done rather quickly

3. The Subscribed Home feeds will be changed in the future. Right now They are just the top rated from all the Streams, but they will be the top rated from your subscribed Streams on log in soon. Because of this the front page is mostly just for show right now, without the ability to load more threads.

4. Users have access to some small parts of the application that they should not have access to, such as some mod options and the user profile when not logged in. Another small fix.

5. ~~ The site is NOT responsive at the moment because they layout and design is not in any way finalized. It is a rough, working idea and it seemed silly to design a completely responsive interface when that interface is likely to change dramatically over the next few weeks~~

If anyone sees these and finds some more issues, please let me know! I will be happy to add them to the list and get to fixing them. All of these issues, except for maybe number 1 should be covered in 0.1.1.


## Look forward to 0.2.0! Coming features

1. More Features for Users
* Requesting and storing a users location with geospatial indexing
* Social logins from facebook, twitter, reddit, and github
~~* A better implementation of JSON web tokens that will expire~~
~~* Password Reset Emailing~~
* Abililty to Change your Password
* Send Invite emails to invite friends to Opinionated
* Settings to decide how the site will look for you (themes, layout options, hiding sensitive info)
* A custom datepicker to allow users to enter birthday
* Rewards you can earn such as badges or trophies
~~* A better role system~~
* Your recently activity displayed on your profile

2. A More Complete Message Board
* Special Streams for those who have certain roles or rewards
* Better Searches and filters, allowing you to search by who created it, within a certain date, etc.
* Nested Comment Reply Chains
* Notifications when other users do things to your creations, or mention you
* A complete text-editor for more complicated posts
* Replace special text inputs with characters like emoticons and overall better post formatting
* The ability to have a sidebar where you can upload html and css files for your stream
* The ability to add moderators and give permissions in your stream
* Ability to sticky posts, remove posts but not delete, and selectively turn off the ability to post or reply.

3. Better Server Implementation
~~* Using Cluster to increase performance~~
* Using something like NGNIX as a proxy over node to cache some static files
* Implementing websockets 
~~* Better Archetecture haha~~
* Better logging
* Include monitoring and profiling
* Writing Tests
~~* Using Async or something similar to reduce my deeply nested callbacks~~

4. Better Frontend Features
~~* Fully Responsive~~
~~* Possibily upgrading to angular 1.5.x for use of components~~
~~* Making use of more directives~~
~~* Cutting down on controller bloat and repeating myself with plans to architect the site well enough to reuse some templates and such~~
~~* Take use of angular template cache~~
~~* Better Design and Layout~~

Front end done!

And many more features! I'll add to this list as I think of things and if anyone has any suggestions I'd be happy to take them into consideration/add to the list

## Contributing

I'm not currently looking for any developers to jump on ship just yet as this is a project for my Portfolio. At some point in the future when I have a job this may change, and if it does I would always enjoy the help and conversation.


