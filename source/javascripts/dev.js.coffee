#= require _vendor/holder/holder
$ ->
  $("#cont1").show()
  $("#cont1").load("/data/d3.js")
  $("#cont2").load("/data/d3.html")
  $("#cont3").load("/data/d3.css")
  $(".tabs a").on "click", (e) ->
    target = $(this).attr('href')
    
    $(".tab", $(this).closest(".tabs")).removeClass "active"
    $(this).closest(".tab").addClass "active"
    
    $(".panel").hide()
    $(target).fadeIn "normal"
    return
