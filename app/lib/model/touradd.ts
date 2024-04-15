import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 8,
    },
    description: {
        type: String,
        required: true,
        min: 20,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Tour = mongoose.models.Tour || mongoose.model("Tour", TourSchema);
export default Tour;