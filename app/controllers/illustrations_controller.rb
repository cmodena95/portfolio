class IllustrationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_illustration, except: [:new, :create, :index]

  def index
    @illustrations = policy_scope(Illustration)
  end

  def show
    authorize @illustration
  end

  def new
    @illustration = Illustration.new
    authorize @illustration
  end

  def create
    @illustration = Illustration.new(illustration_params)
    authorize @illustration
    if @illustration.save
      redirect_to illustrations_path
    else
      render :new
    end
  end

  def edit
    authorize @illustration
  end

  def update
    authorize @illustration
  end

  def destroy
    authorize @illustration
  end

  private

  def set_illustration
    @illustration = Illustration.find(params[:id])
  end

  def illustration_params
    params.require(:illustration).permit(:description, :main_photo, photos: [])
  end
end
