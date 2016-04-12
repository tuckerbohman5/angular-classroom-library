module Api
  module V1 
    class TeachersController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Teacher.all.order("id DESC"))
      end 
      def show 
        respond_with(Teacher.find(params[:id]))
      end 
      def create 
        @teacher = Teacher.new(teacher_params) 
        if @teacher.save 
          respond_to do |format|
            format.json { render :json => @teacher }
          end 
        end 
      end 
      def update 
        @teacher = Teacher.find(params[:id])
        if @teacher.update(teacher_params) 
          respond_to do |format| 
            format.json { render :json => @teacher }
          end 
        end 
      end 
 
      def destroy 
        respond_with Teacher.destroy(params[:id]) 
      end 
      private 
        def teacher_params 
          params.require(:teacher).permit(:title, :first_name, :last_name, :grade_id, :school_id, :email, :password) 
        end 
    end 
  end
end