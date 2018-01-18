$(document).ready(function () {
  startmenudelete()
    /* Hier der jQuery-Code */
  $('#startmenü-icon').on('click', function () {
    if ($('#startmenü-icon').hasClass('selected')) {
      $('#startmenü-icon').removeClass('selected')
            // STARTMENÜ entfernen
      startmenudelete()
    } else {
      $(this).addClass('selected')
            // STARTMENÜ LADEN
      startmenüload()
    }
  })
  function startmenüload () {
    $('#headerbar').hide()
    $('.list-item > img').hide()
    // show
    $('#powerbutton').show()
  }
  // deprecated
  function startmenudelete () {
    $('#headerbar').show()
    $('.list-item > img').show()
        // hide
    $('#powerbutton').hide()
  }
 // Kursansicht ändern
  $('#arrowcrosslist').on('click', function () {
    if ($('#arrowcrosslist').hasClass('selected')) {
      $('#arrowcrosslist').removeClass('selected')
      $('#arrowcrosslist img').css('filter', 'invert(35%)')
      $('#arrowcrosslist').css('background-color', 'black')
      $('#arrowcrosslist').css('border-right', 'none')
    } else {
      $(this).addClass('selected')
      $('#arrowcrosslist').css('background-color', 'grey')
      $('#arrowcrosslist img').css('filter', 'invert(0%)')
      $('#arrowcrosslist').css('border-right', '3px solid black')
    }
  })
})
