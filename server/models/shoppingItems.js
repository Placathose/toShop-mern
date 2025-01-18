import mongoose from 'mongoose';

const ShoppingItemSchema = mongoose.Schema({
    title: String,
    description: String,
    brand: String,
    price: Number,
    link: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ShoppingItem= mongoose.model('shoppingItems', ShoppingItemSchema);

export default ShoppingItem;