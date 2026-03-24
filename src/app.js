import "dotenv/config";
import express from "express";
import schoolRoutes from "./routes/schoolRoute.js";

const app = express();
app.use(express.json());

app.use("/api", schoolRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
