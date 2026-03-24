import Joi from "joi";

export const schoolSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "School name cannot be empty",
    "any.required": "School name is required",
  }),
  address: Joi.string().trim().required().messages({
    "string.empty": "Address cannot be empty",
    "any.required": "Address is required",
  }),
  latitude: Joi.number().required().messages({
    "number.base": "Latitude must be a valid float/number",
    "any.required": "Latitude is required",
  }),
  longitude: Joi.number().required().messages({
    "number.base": "Longitude must be a valid float/number",
    "any.required": "Longitude is required",
  }),
});

export const listSchoolsSchema = Joi.object({
  latitude: Joi.number().required().messages({
    "number.base": "User latitude must be a valid number",
    "any.required": "User latitude is required to calculate proximity",
  }),
  longitude: Joi.number().required().messages({
    "number.base": "User longitude must be a valid number",
    "any.required": "User longitude is required to calculate proximity",
  }),
});
