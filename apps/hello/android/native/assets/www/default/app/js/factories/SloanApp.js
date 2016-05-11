
/* JavaScript content from app/js/factories/SloanApp.js in folder common */
/**
 * Created by Henrikh on 1/20/16.
 */

app.factory('People_testId', function () {
  var id = ''; // ?
  return {
    setId: function (id) {
      this.id = id;
    },
    getId: function () {
      return this.id;
    }
  }
});
