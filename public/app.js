// Grab the articles as a json
$.getJSON("/articles", function(data) {

  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br /> <a href = '" + data[i].link + "'> Read Full Article Here</a>" + $noteBook + "</p>");
    // A button to submit a new note, with the id of the article saved to it
    // $("#articles").append("<p data-id='" + data[i]._id + "'>" + $noteBook + "</p>");
    // A button to submit a new note, with the id of the article saved to it
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + $youHaveBeenSaved + "</p>");
  
  }
});

var $noteBook = `<!-- Button trigger modal -->
        <button type="button" class="btn btn-primary writeANote" data-toggle="modal" data-target="#exampleModal" id="writeANote">
        Write A Note
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                

              <div class="flamingo" id="notes"></div>            

              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick="saveNote()">Save changes</button>
              </div> 
            </div>
          </div>
        </div>`;

var $youHaveBeenSaved = `<!-- Button trigger modal -->
        <button type="button" class="btn btn-primary saveArticle" data-toggle="modal" data-target="#exampleModal" id="saveArticle">
        Save Article
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                
              This article has been saved!
              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div> 
            </div>
          </div>
        </div>`;

// // Grab the articles as a json
// $.getJSON("/savedarticles", function(data) {

//     $("#articles").css("display", "none");
//     $("#saved").css("display", "block");

//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the apropos information on the page
//     $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br /> <a href = '" + data[i].link + "'> Read Full Article Here</a> <br> <button class='btn' id='note' onclick='writeANote()'>Write A Note!</button> </p>");
//     // A button to submit a new note, with the id of the article saved to it
//     $("#articles").append("<button data-id='" + data._id + "' id='writeanote'>Write A Note</button>");
//     // A button to submit a new note, with the id of the article saved to it
//     $("#articles").append("<button data-id='" + data._id + "' id='savearticles'>Save This Article</button>");
  
//   }
// });


// Whenever someone clicks a p tag
// $(document).on("click", "#writeANote", function() {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .then(function(data) {
//       console.log(data);

//       // $("#notes").append("<button type='button' class='btn btn-primary writeANote' data-toggle='modal' data-target='#exampleModal' id='writeANote'> Write A Note </button>")

//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");


//       // //Create a parent div
//       // var notePad = $('<div>');
//       // //Add a class to the div
//       // notePad.addClass("results");
//       // // make the name an h2,
//       // notePad.append("<h2>" + data.title + "</h2>");
//       // // An input to enter a new title
//       // notePad.append("<input id='titleinput' name='title' >");
//       // // A textarea to add a new note body
//       // notePad.append("<textarea id='bodyinput' name='body'></textarea>");
//       // // A button to submit a new note, with the id of the article saved to it
//       // notePad.append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       //Append the search results to the search-results section
//       $("#notes").append(notePad)

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

//--------------------//

// $(document).ready(function () {
//   function writingNotes() {

$(document).on("click", ".writeANote", function writingNotes() {

 // Empty the notes from the note section
 $("#notes").empty();
 // Save the id from the p tag
 var thisId = $(this).attr("data-id");

 // Now make an ajax call for the Article
 $.ajax({
   method: "GET",
   url: "/articles/" + thisId
 })
   // With that done, add the note information to the page
   .then(function(data) {
     console.log(data);

     // The title of the article
     $("#notes").append("<h2>" + data.title + "</h2>");
     // An input to enter a new title
     $("#notes").append("<input id='titleinput' name='title' >");
     // A textarea to add a new note body
     $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
     // A button to submit a new note, with the id of the article saved to it
     $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");


     // If there's a note in the article
     if (data.note) {
       // Place the title of the note in the title input
       $("#titleinput").val(data.note.title);
       // Place the body of the note in the body textarea
       $("#bodyinput").val(data.note.body);
     }
   });


//   $('body').on('click', '.writeANote', writingNotes);
});

//--------------------//



// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

// When you click the SCRAPE IT button
function scrapeIt()
    {

    $.ajax({url: "/scrape", 
    method: "GET", 
    success: function(result)
    {
      $(console.log("Scraped articles to display!", result));
    }
  });
  window.location="/";
    }