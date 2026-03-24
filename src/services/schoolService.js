import db from "../db.js";
import { calculateDistance } from "../utils/geo.util.js";

export const addSchools = async (schoolData) => {
  const { name, address, latitude, longitude } = schoolData;

  const query = `
        INSERT INTO schools (name, address, latitude, longitude)
        VALUES (?, ?, ?, ?)`;

  const [result] = await db.execute(query, [
    name,
    address,
    latitude,
    longitude,
  ]);

  return result.insertId;
};

export const getNearbySchools = async (userLat, userLong) => {
  const query = `SELECT * FROM schools`;
  const [schools] = await db.execute(query);

  const nearbySchools = schools.map((s) => {
    const distance = calculateDistance(
      userLat,
      userLong,
      s.latitude,
      s.longitude,
    );
    return {
      ...s,
      distance: parseFloat(distance.toFixed(2)),
    };
  });

  nearbySchools.sort((a, b) => a.distance - b.distance);

  return nearbySchools;
};
