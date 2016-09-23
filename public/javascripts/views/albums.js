var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name='albums']").html()),
  el: $('#albums')[0],
  render: function(){
    this.$el.html(this.template({albums: this.collection.toJSON()}));
  },
  initialize: function(){
    // this.$el = $('#albums');
    // this.el = this.$el[0];
    this.listenTo(this.collection, "change", this.render);
  }
});