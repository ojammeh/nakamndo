class StaffDetailsController < ApplicationController
  def index
    @staffs = StaffDetail.all

    add_breadcrumb "Staff List", :staff_details_path, :title => "Back to the Index"
    @title = "Staff List"
  end
end
