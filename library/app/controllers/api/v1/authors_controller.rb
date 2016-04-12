module Api
  module V1 
    class AuthorsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Author.all.order("id DESC"))
      end 
      def show 
        respond_with(Author.find(params[:id]))
      end 
      def create 
        @author = Author.new(author_params) 
        if @author.save 
          respond_to do |format|
            format.json { render :json => @author }
          end 
        end 
      end 
      def update 
        @author = Author.find(params[:id])
        if @author.update(author_params) 
          respond_to do |format| 
            format.json { render :json => @author }
          end 
        end 
      end 
 
      def destroy 
        respond_with Author.destroy(params[:id]) 
      end 
      private 
        def author_params 
          params.require(:author).permit(:first_name, :last_name) 
        end 
    end 
  end
end