class ArtworksController < ApplicationController
    def index
        if params[:user_id] 
            
            @artworks = User.find(params[:user_id]).shared_artworks
            render json: @artworks 
        # else 
        #     @artworks = Artwork.all 
        end
        
    end

    def show # maps to for :id 
        render json: params
    end

    def create
        
        @artworks = Artwork.new(artwork_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if @artworks.save 
            render json: @artworks
        else 
            render json: @artworks.errors.full_messages, status: 422 
        end
    end

    def show 
        @artworks = Artwork.find(params[:id])
        render json: @artworks 
    end

    
    def update
        @artworks = Artwork.find(params[:id])
        if @artworks.update(artwork_params) 
 
            render json: @artworks
        else
          render json: @artworks.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @artworks = Artwork.find(params[:id])
        @artworks.destroy 
        render json: @artworks
      end

private 

    def artwork_params # strong params, only allow users to set what we allow
        params.require(:artwork).permit(:artist_id, :title)
          # params will require top level key of :laugh, it will allow nested key of :body
    end

end