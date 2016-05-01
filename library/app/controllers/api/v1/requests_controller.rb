
module Api
  module V1 
    class RequestsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Request.all.order("id DESC"))
      end 
      def show 
        respond_with(Request.find_by(id: params[:id]))
      end 

      def create 
        @request = current_user.requests.build(request_params)
        if @request.save
          render json: @request
        else
          render :nothing
        end
      end 
      
      def update 
       @request = Request.find_by(id: params[:id])
       @request.update(request_params)
       render json: @request
      end 
 
      def destroy 
         
      end 
      private 
        def request_params 
          params.require(:request).permit(:owner_id, :book_id, :approved) 
        end 
    end 
  end
end