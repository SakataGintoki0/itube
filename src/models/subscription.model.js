import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, // jo subscribe kar raha hai
    ref: "User",
  },
  channel: {
    type: Schema.Types.ObjectId, // jiska channel hai
    ref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
