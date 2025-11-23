// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//     amount: { type: Number, required: true },
//     status: { type: String, default: 'Order placed' },
//     paymentType: { type: String, required: true },
//     isFailed: { type: Boolean, required: true, default: false },
//     address: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'Address',
//     },
//     items: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           required: true,
//           ref: 'Product',
//         },
//         quantity: { type: Number, required: true },
//       },
//     ],
//   },
//   { minimize: false }
// );

// const Order = mongoose.model('Order', orderSchema);
// export default Order;
import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Order placed' },
    paymentType: { type: String, required: true },
    isFailed: { type: Boolean, required: true, default: false },
    isPaid: { type: Boolean, required: true, default: false },

    address: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Address',
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true, minimize: false } // ← أضف timestamps
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
