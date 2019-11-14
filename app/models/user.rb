class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :favorites
  has_many :ratings, foreign_key: :author_id

  after_initialize :ensure_session_token

  def self.find_by_credentials(form_username, form_password)
    user = User.find_by(username: form_username)

    return nil if user.nil?
    user.is_password?(form_password) ? user : nil
  end

  def is_password?(form_password)
    BCrypt::Password.new(self.password_digest).is_password?(form_password)
  end

  def password=(form_password)
    @password = form_password
    self.password_digest = BCrypt::Password.create(form_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
