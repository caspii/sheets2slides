$(function() {
  console.log( 'ready!' );
  window.markdown_string = ("class: center, middle\n\n # My User Stories\n\n---\n") // Global Variable
  ajaxURL = "/user_stories.csv"


  $.ajax({
       url: ajaxURL,
       success: function(data_csv) {
         stories = $.csv.toArrays(data_csv);
         //console.log(a)
         for (i = 1; i < stories.length; i++) {
           console.log(stories[i])
           createSlide(stories[i])
         }

         // Finished. Add Markdown to DOM
         window.markdown_string += ("class: center, middle\n # THE END")
         $( "#source" ).append(window.markdown_string)

         // Create slideshow
         var slideshow = remark.create();

       },
       error: function(xhr, ajaxOptions, thrownError) {
         console.log(thrownError)
       }
     });


});


function createSlide(story_array){
  window.markdown_string += "# " + story_array[0] + "\n"
  window.markdown_string += "## Importance: " + story_array[2] + "\n "
  window.markdown_string += "As a " + story_array[3] + ", I want to "
  window.markdown_string += story_array[4] + " so that " + story_array[5] + "\n"
  window.markdown_string += '---\n'
}
