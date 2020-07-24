const FollowToggle = require('./follow_toggle');
console.log("twitter.js");
$(function() {
    $('button.follow-toggle').each( (i, button) =>
        new FollowToggle(button)
    );
});

