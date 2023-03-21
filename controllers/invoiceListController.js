const asyncHandler = require("express-async-handler");
const Invoice = require("../models/invoiceModel");

exports.createInvoice = asyncHandler(async (req, res) => {
	const { date, userId, accountArray, year } = req.body;
	const invoiceNumber = Math.floor(Math.random() * 1000).toString();
	let totalAmount = 0;
	for (let i = 0; i < accountArray.length; i++) {
		totalAmount += accountArray[i].amount;
	}
	console.log(accountArray);
	const invoice = new Invoice({
		date: date,
		userId: userId,
		accountArray: accountArray,
		invoiceNumber: invoiceNumber,
		totalAmount: totalAmount,
		year: year
	});
	await invoice.save();
	if (invoice) {
		res.status(201).json({ invoice: invoice });
	} else {
		res.status(401);
		res.json({
			message: "Invalid invoice data"
		});
		throw new Error("Invalid invoice data");
	}
});

exports.getAllPosts = async (req, res) => {
	try {
		const keyword = req.query.keyword
			? {
					invoiceNumber: {
						$regex: req.query.keyword,
						$options: "i" // use "i" option for case-insensitive search
					}
			  }
			: {};

		const invoiceList = await Invoice.find(keyword);

		res.status(200).json({
			status: "success",
			invoiceList
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: "Failed",
			message: err.message
		});
	}
};
