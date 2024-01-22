import { Schema, model, models } from "mongoose";

const AdsSchema = new Schema(
  {
    ad_id: {
      type: String,
      required: [true, "Topic is required."],
    },
    tags: {
      type: String,
      required: [true, "language is required."],
    },
    headline: {
      type: String,
    },
    name: {
      type: String,
    },
    content: {
      type: String,
      required: [true, "Content is required."],
    },

    domains: {
      type: Array,
      required: [true, "domains is required."],
    },
    domains_url: {
      type: Array,
      required: [true, "domains url is required."],
    },
    tags: {
      type: String,
    },
    forms: {
      type: String,
    },

    state: {
      type: Boolean,
      required: [true, "State is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Ads = models.Ads || model("Ads", AdsSchema);
export default Ads;
