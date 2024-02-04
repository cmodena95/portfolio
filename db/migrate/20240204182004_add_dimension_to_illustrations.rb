class AddDimensionToIllustrations < ActiveRecord::Migration[7.0]
  def change
    add_column :illustrations, :dimension, :string, default: "V"
  end
end
