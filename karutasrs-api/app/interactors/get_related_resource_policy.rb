class GetRelatedResourcePolicy
	include Interactor

	def call
		params = context.data
		source = params[:source].sub "api/", ""
		source = (source.camelize.singularize + "Policy").constantize

		context.policy = source
	end
end