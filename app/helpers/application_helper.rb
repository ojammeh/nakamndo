module ApplicationHelper
  def render_title
    default_name = "Ports Information Management Systems"
    return default_name + " :: " + @title if defined?(@title)
    "Ports Information Management Systems"
  end
end
