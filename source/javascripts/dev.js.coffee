#= require _vendor/holder/holder
$ ->
  $("#cont1").show()
  $(".tabs a").on "click", (e) ->
    target = $(this).attr('href')
    
    $(".tab", $(this).closest(".tabs")).removeClass "active"
    $(this).closest(".tab").addClass "active"
    
    $(".panel").hide()
    $(target).fadeIn "slow"
    return
