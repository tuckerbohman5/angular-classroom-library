module Api
  module V1 
    class GradesController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Grade.all.order("id DESC"))
      end 
      def show 
        respond_with(Grade.find(params[:id]))
      end 
      def create 
        @grade = Grade.new(grade_params) 
        if @grade.save 
          respond_to do |format|
            format.json { render :json => @grade }
          end 
        end 
      end 
      def update 
        @grade = Grade.find(params[:id])
        if @grade.update(grade_params) 
          respond_to do |format| 
            format.json { render :json => @grade }
          end 
        end 
      end 
 
      def destroy 
        respond_with Grade.destroy(params[:id]) 
      end 
      private 
        def grade_params 
          params.require(:grade).permit(:grade) 
        end 
    end 
  end
end