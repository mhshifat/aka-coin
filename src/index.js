require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { PORT = 5000, MONGODB_URI } = process.env;
const PagesModel = mongoose.model(
	"pages",
	new mongoose.Schema(
		{
			title: String,
			pre_title: String,
			description: String,
			pre_title_yellow: String,
			pre_title_blue: String,
			wallets: [
				new mongoose.Schema({
					name: String,
					icon: String,
					type: String,
					description: String,
				}),
			],
		},
		{ timestamps: true }
	)
);

app.use([cors(), express.json()]);

app.get("/api", (req, res) => res.status(200).json({ msg: "Hello from API" }));
app.get("/api/pages", async (req, res) => {
	try {
		const data = await PagesModel.findOne({});
		return res.status(200).json({
			data,
		});
	} catch (err) {
		return res.status(500).json({
			msg: err.message,
		});
	}
});
app.post("/api/create", async (req, res) => {
	try {
		if (req.body._id) {
			const data = await PagesModel.findByIdAndUpdate(req.body._id, req.body, {
				new: true,
			});
			return res.status(200).json({
				data,
			});
		}
		const data = await PagesModel.create(req.body);
		return res.status(201).json({
			data,
		});
	} catch (err) {
		return res.status(500).json({
			msg: err.message,
		});
	}
});

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database Connected!");
		app.listen(PORT, () =>
			console.log(`The server is running on port ${PORT}`)
		);
	});
