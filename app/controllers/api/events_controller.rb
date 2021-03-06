class Api::EventsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    if @event.save
      

      render "api/events/show"
    else
      render json: @event.errors.full_messages
    end
  end

  def index
    @events = Event.all
  end

  def destroy
    @event = current_user.events_hosting.find(params[:id])
    @event.destroy
    render "api/events/index"
  end

  def update
    @event = current_user.events_hosting.find(params[:id])
    if @event.update(event_params)
      render "api/events/show"
    else
      render json: ["not the host"]
    end
  end

  def show
    @event = Event.find(params[:id])
    render 'api/events/show'
  end

  private
  def event_params
    params.require(:event).permit(:host_id, :participant_id, :location_id, :date, :time)
  end

end