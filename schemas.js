// Connect joi for validation errors.

const BaseJoi = require("joi");
const sanitizeHtml = require("sanitize-html");

// Define joi extension for html-sanitization.

const extension = (joi) => ({
	type: "string",
	base: joi.string(),
	messages: {
		"string.escapeHTML": "{{#label}} must not include HTML!",
	},
	rules: {
		escapeHTML: {
			validate(value, helpers) {
				const clean = sanitizeHtml(value, {
					allowedTags: [],
					allowedAttributes: {},
				});
				if (clean !== value)
					return helpers.error("string.escapeHTML", { value });
				return clean;
			},
		},
	},
});

const Joi = BaseJoi.extend(extension);

// Define the joi campground validation schema.

module.exports.campgroundSchema = Joi.object({
	campground: Joi.object({
		title: Joi.string().required().escapeHTML(),
		price: Joi.number().required().min(0),
		// TODO The error should be only a flash message. Be able to edit without requiring the image.
		// image: Joi.string().required(),
		location: Joi.string().required().escapeHTML(),
		description: Joi.string().required().escapeHTML(),
	}).required(),
	deleteImages: Joi.array(),
});

// Define the joi review validation schema.

module.exports.reviewSchema = Joi.object({
	review: Joi.object({
		rating: Joi.number().required().min(1).max(5),
		body: Joi.string().required().escapeHTML(),
	}).required(),
});
