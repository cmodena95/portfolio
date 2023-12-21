class Illustration < ApplicationRecord
  has_one_attached :main_photo
  has_many_attached :photos
end
