class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true


    attr_reader :password

    after_initialize :ensure_session_token
    
    def generate_unique_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
    
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end



end
