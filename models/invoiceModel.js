const mongoose = require("mongoose");
const invoiceSchema = mongoose.Schema({
	date: {
		type: Date,
		default: Date.now,
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	accountArray: {
		type: [
			{
				accountId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true
				},
				amount: {
					type: Number
				}
			}
		],
		required: true
	},
	invoiceNumber: {
		type: String,
		required: true,
		unique: true
	},
	totalAmount: {
		type: Number,
		default: 0,
		required: true
	},
	year: {
		type: String,
		required: true
	}
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
