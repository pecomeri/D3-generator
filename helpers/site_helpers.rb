module SiteHelpers

  def page_title
    title = "D3 Generator"
    if data.page.title
      title << " | " + data.page.title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "This is D3.js generator. You can create graph by choosing some property"
    end
    description
  end

end
