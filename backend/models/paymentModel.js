const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
//     {
//     resultInfo: {
//         resultStatus: {
//             type: String,
//             required: true
//         },
//         resultCode: {
//             type: String,
//             required: true
//         },
//         resultMsg: {
//             type: String,
//             required: true
//         },
//     },
//     txnId: {
//         type: String,
//         required: true
//     },
//     bankTxnId: {
//         type: String,
//         required: true
//     },
//     orderId: {
//         type: String,
//         required: true
//     },
//     txnAmount: {
//         type: String,
//         required: true
//     },
//     txnType: {
//         type: String,
//         required: true
//     },
//     gatewayName: {
//         type: String,
//         required: true
//     },
//     bankName: {
//         type: String,
//         required: true
//     },
//     mid: {
//         type: String,
//         required: true
//     },
//     paymentMode: {
//         type: String,
//         required: true
//     },
//     refundAmt: {
//         type: String,
//         required: true
//     },
//     txnDate: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// }
{
    // products: [
    //   {
    //     type: mongoose.ObjectId,
    //     ref: "Product",
    //   },
    // ],
    payment: {},
    // buyer: {
    //   type: mongoose.ObjectId,
    //   ref: "User",
    // },
    // status: {
    //   type: String,
    //   default: "Not Process",
    //   enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);