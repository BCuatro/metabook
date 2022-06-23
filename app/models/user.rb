class User < ApplicationRecord
    
    validates :username, presence: true, uniqueness: {case_sensitive: false}
    validates :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :first_name, :last_name, format: { with: /\A[^0-9`!@#\$%\^&*+_=]+\z/}
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: {case_sensitive: false}
    validates :password, length: {minimum: 6}, allow_nil: true
    

    attr_reader :password
    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
    def full_name
        "#{first_name} #{last_name}"
    end


    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end