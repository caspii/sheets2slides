$(function() {

  window.markdown_string = ("class: center, middle\n\n # My User Stories\n\n---\n")

  $('#go').on('click', function () {
    url = $('#publishURL').val()
    $('#welcome').hide()
    $('#waiting').show()
    Tabletop.init( { key: url, callback:  processData, simpleSheet: true } )
    console.log("Initialised")
  })

});


function createSlide(story_obj){
  window.markdown_string += "## ID: " + story_obj['ID'] + " // PRIO: " + story_obj['Priority'] + " <hr>\n"
  window.markdown_string += "# As a " + story_obj['As a'] + ", I want to "
  window.markdown_string += story_obj['I want to'] + " so that " + story_obj['so that'] + "\n"
  window.markdown_string += story_obj['Notes'] + "\n"
  window.markdown_string += '---\n'
}

function processData(stories, tabletop) {
  for (i = 1; i < stories.length; i++) {
    createSlide(stories[i])
  }

  // Finished. Add Markdown to DOM
  window.markdown_string += ("class: center, middle\n # THE END")
  $( "#source" ).append(window.markdown_string)

  $('#waiting').hide()
  // Create slideshow
  var slideshow = remark.create();
}
