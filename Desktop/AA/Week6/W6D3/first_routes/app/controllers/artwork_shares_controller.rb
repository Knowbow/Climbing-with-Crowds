class ArtworkSharesController < ApplicationController
    def create
        
        @share = ArtworkShare.new(artworkshares_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if @share.save 
            render json: @share
        else 
            render json: @share.errors.full_messages, status: 422 
        end
    end

      def destroy
        @share = ArtworkShare.find(params[:id])
        @share.destroy 
        render json: @share
      end
    # private
    
    def artworkshares_params # strong params, only allow users to set what we allow
        params.require(:artworkshare).permit(:artwork_id, :viewer_id)
          # params will require top level key of :laugh, it will allow nested key of :body
    end
end