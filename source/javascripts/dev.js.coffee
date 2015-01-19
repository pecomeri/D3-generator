#= require _vendor/holder/holder
$ ->
  $("#cont1").show()
  $("#cont1").load("/javascripts/d3dev.js")
  $(".tabs a").on "click", (e) ->
    target = $(this).attr('href')
    
    $(".tab", $(this).closest(".tabs")).removeClass "active"
    $(this).closest(".tab").addClass "active"
    
    $(".panel").hide()
    $(target).fadeIn "normal"
    return
