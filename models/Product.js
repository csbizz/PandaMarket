import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 30
    },
    description: { type: String },
    isComplete: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true
  }
);

// model의 첫번째 인자: 대문자 시작, 단수형 - Product
// model이 다루게 될 컬렉션: 소문자 시작, 복수형 - products
const Product = mongoose.model('Product', ProductSchema);

export default Product;
