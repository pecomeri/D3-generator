#= require _vendor/holder/holder
$ ->
  $(".tabs a").on "click", (e) ->
    e.preventDefault()

    target = $(this).attr('href')
    
    $(".tab", $(this).closest(".tabs")).removeClass "active"
    $(this).closest(".tab").addClass "active"

    $(".panel", $(target).closest(".panels")).removeClass "active"
    $(target).addClass "active"
    return
