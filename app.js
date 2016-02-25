$(function() {
  console.log( 'ready!' );
  window.markdown_string = ("class: center, middle\n\n # My User Stories\n\n---\n") // Global Variable

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1HZsaJEXOp0dUEeVp9CdUmHlv16QYmqP_jq7wCVxLgh4/pubhtml?gid=0&single=true';

  Tabletop.init( { key: public_spreadsheet_url,
                       callback:  processData,
                       simpleSheet: true } )

    function processData(stories, tabletop) {
        //alert("Successfully processed!")
        console.log(stories);
        for (i = 1; i < stories.length; i++) {
          createSlide(stories[i])
        }

        // Finished. Add Markdown to DOM
        window.markdown_string += ("class: center, middle\n # THE END")
        $( "#source" ).append(window.markdown_string)

        // Create slideshow
        var slideshow = remark.create();
    }

});

function createSlide(story_obj){
  window.markdown_string += "## ID: " + story_obj['ID'] + " // PRIO: " + story_obj['Priority'] + " <hr>\n"
  window.markdown_string += "# As a " + story_obj['As a'] + ", I want to "
  window.markdown_string += story_obj['I want to'] + " so that " + story_obj['so that'] + "\n"
  window.markdown_string += story_obj['Notes'] + "\n"
  window.markdown_string += '---\n'
}
