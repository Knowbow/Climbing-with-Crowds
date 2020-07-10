const APIUtil = {
    followUser: id => {
        // ...
        return $.ajax({
            method: 'DELETE',
            url: `/users/${id}/follow`,
            dataType: 'json',
            success: function (state) {
                this.followState = "unfollowed";
                this.render();
            }
        })
    },

    unfollowUser: id => {
        // ...
        return $.ajax({
            method: 'POST',
            url: `/users/${id}/follow`,
            dataType: 'json',
            
            success: function () {
                this.followState = "follow";
                this.render();
            }
        })
        
    }
};

module.exports = APIUtil;