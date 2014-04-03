class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  
  attr_accessible :username, :password, :password_confirmation
  
  validates :username, :uniqueness => true, :presence => true
end
