const api = require('./api_util');

class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.user_id = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        
        
        this.render();
        this.$el.on("click", this.handleClick.bind(this));
    }

    render() {
        if (this.followState === "unfollowed"){
            this.$el.html("Unfollow!");
            

        }
        else{
            this.$el.html("Follow!");
            
        }
    }

    handleClick(e){
        e.preventDefault();
        
        

        if(this.followState === "unfollowed"){

            api.followUser(this.user_id);

        } else {
            
            api.unfollowUser(this.user_id);
    }
    }
}

module.exports = FollowToggle;
