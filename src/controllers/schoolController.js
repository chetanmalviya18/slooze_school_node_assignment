import {
  listSchoolsSchema,
  schoolSchema,
} from "../validations/schoolValidation.js";
import * as schoolService from "../services/schoolService.js";

export const addSchool = async (req, res) => {
  try {
    const value = await schoolSchema.validateAsync(req.body, {
      abortEarly: false,
    });

    const insertId = await schoolService.addSchools(value);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      data: { id: insertId },
    });
  } catch (err) {
    if (err.isJoi) {
      const errorMessages = err.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }

    console.error("Error adding school:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const listSchools = async (req, res) => {
  try {
    const value = await listSchoolsSchema.validateAsync(req.query, {
      abortEarly: false,
    });

    const sortedSchools = await schoolService.getNearbySchools(
      value.latitude,
      value.longitude,
    );

    return res.status(200).json({
      message: "Schools retrieved and sorted successfully",
      count: sortedSchools.length,
      data: sortedSchools,
    });
  } catch (err) {
    if (err.isJoi) {
      const errorMessages = err.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }

    console.error("Error adding school:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
