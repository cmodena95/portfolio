class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @language = params[:language] || "en"
  end

  def admin
  end

  def about
    @language = params[:language] || "en"
  end

  def contact
  end
end
