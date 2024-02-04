class IllustrationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_illustration, except: [:new, :create, :index]
  before_action :check_device

  def index
    @illustrations = policy_scope(Illustration).order("id DESC")
    @language = params[:language] || "en"
  end

  def show
    authorize @illustration
  end

  def new
    @language = params[:language] || "en"
    @illustration = Illustration.new
    authorize @illustration
  end

  def create
    @language = params[:language] || "en"
    @illustration = Illustration.new(illustration_params)
    authorize @illustration
    if @illustration.save
      redirect_to illustrations_path(language: @language)
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

  def check_device
    request.variant = :phone if browser.device.mobile?
  end
end
