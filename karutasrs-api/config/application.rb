require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module KarutasrsApi
	class Application < Rails::Application
		if (Rails.env.development? || Rails.env.test?)
			config.middleware.insert_before 0, Rack::Cors, :debug => true, :logger => (-> { Rails.logger }) do
				allow do
					origins '*'
					resource '*', headers: :any, methods: :any
				end
			end
		end

		if Rails.env.production?
			config.middleware.insert_before 0, Rack::Cors do
				allow do
					origins 'localhost'
					resource '*', headers: :any, methods: :any
				end
			end
		end

		# Initialize configuration defaults for originally generated Rails version.
		config.load_defaults 6.0

		# Settings in config/environments/* take precedence over those specified here.
		# Application configuration can go into files in config/initializers
		# -- all .rb files in that directory are automatically loaded after loading
		# the framework and any gems in your application.
	end
end
