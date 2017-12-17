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
  // function selectedStartMenüIcon () {
  //   if ($('#startmenü-icon').hasClass('selected')) {
  //     $('#startmenü-icon').removeClass('selected')
  //     // STARTMENÜ entfernen
  //     startmenudelete()
  //   } else {
  //     $(this).addClass('selected')
  //     // STARTMENÜ LADEN
  //     startmenüload()
  //   }
  // }
  // function selectedStartMenüIconOnlyOn () {
  //     $('#startmenü-icon').addClass('selected');
  //     // STARTMENÜ LADEN
  //     startmenüload()
  // }

  function startmenüload () {
        // opacity Kurs
    // $('#kurs').css('opacity', '0.4')
    // $('#kurs').css('z-index', '-1')
    // $('#display').css('background-color', 'rgba(33, 33, 33, 0.8)')
    //     // hide
    $('#headerbar').hide()
    $('.list-item > img').hide()

        // show
    // $('#startmenü-display').show()
    $('#powerbutton').show()
  }
  function startmenudelete () {
        // opacity Kurs
    // $('#kurs').css('opacity', '1')
    // $('#kurs').css('z-index', '0')
    // $('#display').css('background-color', 'white')
        // show
    $('#headerbar').show()
    $('.list-item > img').show()
        // hide
    // $('#startmenü-display').hide()
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

// function jumpStartMenu(h){
//   selectedStartMenuIconOnlyOn();
//   var url = location.href;               //Save down the URL without hash.
//   location.href = "#"+h;                 //Go to the target element.
//   history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
// export {jumpStartMenu}
