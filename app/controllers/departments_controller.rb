class DepartmentsController < ApplicationController
  def index
    @departments = Department.all
     add_breadcrumb "Departments", :departments_path, :title => "Back to the Index"
     @title = "Departments"
  end
  
  def create 
    @department = Department.new(department_params)
    
    if @department.save
          render json: @department
        else
          render json: @department.errors, status: :unprocessable_entity
    end
  end
  
  private 
  
  def department_params
        params.require(:department).permit(:department_name, :intercom_number, :external_number, :description)
  end
  
end
