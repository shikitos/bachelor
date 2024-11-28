import { Request, Response } from "express";

import Metrics, { MetricsType } from "../models/Metrics";

export const getMetrics = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  console.log("getMetrics", req.query);
  try {
    const metrics: MetricsType[] = await Metrics.find().skip(skip).limit(limit);
    const total = await Metrics.countDocuments();
    res.json({ metrics, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const postMetric = async (req: Request, res: Response) => {
  console.log("postMetric", req.body);
  const newMetrics = new Metrics(req.body);

  try {
    const savedMetric: MetricsType = await newMetrics.save();
    res.status(201).json(savedMetric);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
