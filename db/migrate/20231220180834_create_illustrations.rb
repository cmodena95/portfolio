class CreateIllustrations < ActiveRecord::Migration[7.0]
  def change
    create_table :illustrations do |t|
      t.text :description

      t.timestamps
    end
  end
end
