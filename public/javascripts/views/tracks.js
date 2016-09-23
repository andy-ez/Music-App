var $overlay = $("#overlay");
var TracksView = Backbone.View.extend({
  attributes: {
    id: "tracks_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  template: Handlebars.compile($("[data-name='tracks']").html()),
  render: function(){
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album
    }))
    this.open();
  },
  fadeOut: function(){
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function(){
      this.remove();
    }).bind(this)
  },
  close: function(e){
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  open: function(){
    this.$el.fadeIn(this.duration);
    $overlay.fadeIn(this.duration)
  },
  initialize: function(options){
    this.album = options.album;
    this.$el.appendTo(document.body)
  }
})
