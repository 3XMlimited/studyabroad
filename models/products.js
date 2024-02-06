import { Schema, model, models } from "mongoose";

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
    },
    headline: {
      type: String,
    },
    button_text: {
      type: String,
    },
    fields: {
      type: Array,
    },
    Color: {
      type: String,
    },
    InputBorderColor: {
      type: String,
    },
    ButtonBGColor: {
      type: String,
    },
    ButtonHoverColor: { type: String },
    ButtonTextColor: { type: String },
    BackgroundColor: { type: String },
    products: { type: Array },
    thankyou: { type: String },
    state: {
      type: Boolean,
      required: [true, "State is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Products = models.Products || model("Products", ProductsSchema);
export default Products;
