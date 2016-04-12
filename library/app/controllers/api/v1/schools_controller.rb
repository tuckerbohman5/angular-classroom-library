module Api
  module V1 
    class SchoolsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(School.all.order("id DESC"))
      end 
      def show 
        respond_with(School.find(params[:id]))
      end 
      def create 
        @school = School.new(school_params) 
        if @school.save 
          respond_to do |format|
            format.json { render :json => @school }
          end 
        end 
      end 
      def update 
        @school = School.find(params[:id])
        if @school.update(school_params) 
          respond_to do |format| 
            format.json { render :json => @school }
          end 
        end 
      end 
 
      def destroy 
        respond_with School.destroy(params[:id]) 
      end 
      private 
        def school_params 
          params.require(:school).permit(:name) 
        end 
    end 
  end
end