class User < ActiveRecord::Base
  has_secure_password
  
  attr_accessible :username, :password, :password_digest
  
  validates :username, :uniqueness => true
end
