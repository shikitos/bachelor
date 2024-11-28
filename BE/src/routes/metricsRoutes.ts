import { Router } from "express";

import { getMetrics, postMetric } from "../controllers";

const metricsRouter: Router = Router();

metricsRouter.get("/", getMetrics);
metricsRouter.post("/", postMetric);

export default metricsRouter;
