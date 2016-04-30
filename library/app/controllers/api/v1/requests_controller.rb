module Api
  module V1 
    class RequestsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Requests.all.order("id DESC"))
      end 
      def show 
        
      end 
      def create 
       
      end 
      def update 
       
      end 
 
      def destroy 
         
      end 
      private 
        def reading_level_params 
          # params.require(:request).permit(:approval) 
        end 
    end 
  end
end