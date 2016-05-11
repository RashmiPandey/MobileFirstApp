
/* JavaScript content from app/js/factories/settings.js in folder common */
/**
 * Created by Henrikh on 1/13/16.
 */

app.factory('Settings', function () {
    return {
        global: {},
        setData: function (data) {
            this.global = data;
        }
    };
});