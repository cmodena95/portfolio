class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :contact]
  before_action :check_device

  def home
    @language = params[:language] || "en"
  end

  def admin
  end

  def about
    @language = params[:language] || "en"
  end

  private

  def check_device
    request.variant = :phone if browser.device.mobile?
  end
end
