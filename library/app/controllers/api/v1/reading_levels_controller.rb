module Api
  module V1 
    class ReadingLevelsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(ReadingLevel.all.order("id DESC"))
      end 
      def show 
        respond_with(ReadingLevel.find(params[:id]))
      end 
      def create 
        @reading_level = ReadingLevel.new(reading_level_params) 
        if @reading_level.save 
          respond_to do |format|
            format.json { render :json => @reading_level }
          end 
        end 
      end 
      def update 
        @reading_level = ReadingLevel.find(params[:id])
        if @reading_level.update(reading_level_params) 
          respond_to do |format| 
            format.json { render :json => @reading_level }
          end 
        end 
      end 
 
      def destroy 
        respond_with ReadingLevel.destroy(params[:id]) 
      end 
      private 
        def reading_level_params 
          params.require(:reading_level).permit(:level) 
        end 
    end 
  end
end