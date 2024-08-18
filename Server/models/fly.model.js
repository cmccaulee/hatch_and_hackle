import { model, Schema } from 'mongoose';
const FlySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: [3, "Name must be at least 3 characters long"],
            maxLength: [50, "Name must be at most 100 characters long"]
        },
        type: {
            type: String,
            required: [true, "Type is required"],
            validate: {
                validator: v => ["Dry", "Wet", "Nymph", "Streamer", "Stillwater", "Other"].includes(v),
                message: `Please select a valid type from the dropdown`
            },
        },
        hatch: {
            type: String,
            required: [true, "Hatch is required"],
            validate: {
                validator: v => ["Caddis", "Mayfly", "Midge", "Stonefly", "Terrestrial", "Baitfish", "Attractor", "Other"].includes(v),
                message: "Please select a valid hatch from the dropdown"
            }
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minLength: [10, "Description must be at least 10 characters long"],
            maxLength: [400, "Description must be at most 400 characters long"]
        },
        image: {
            type: String,
            required: [true, "Image is required"],
            validate: {
                validator: v => v.match(/\.(jpeg|jpg|gif|png)$/) != null,
                message: "Please provide a valid image URL"
            }
        },
        heroText: {
            type: String,
            required: [false],
            minLength: [20, "Hero text must be at least 20 characters long"],
            maxLength: [600, "Hero text must be at most 600 characters long"]
        },
        heroImage: {
            type: String,
            required: [false],
            validate: {
                validator: v => v.match(/\.(jpeg|jpg|gif|png)$/) != null,
                message: "Please provide a valid image URL"
            }
        },
    },
    { timestamps: true }
);

const Fly = model('Fly', FlySchema);
export default Fly;