import mongoose, { Document, Schema } from "mongoose";

export enum Metrics {
  FCP = "FCP",
  LCP = "LCP",
  FID = "FID",
  TTFB = "TTFB",
}

export enum MetricsOrigin {
  SSR = "SSR",
  CSR = "CSR",
}

export type MetricsType = Document & {
  type: Metrics;
  value: number;
  date: Date;
  origin: MetricsOrigin;
  page: string;
};

const MetricSchema = new Schema<MetricsType>({
  type: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
  origin: { type: String, required: true },
  page: { type: String, required: true },
});

export default mongoose.model<MetricsType>("Metrics", MetricSchema);
