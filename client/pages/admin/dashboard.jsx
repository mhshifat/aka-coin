/* eslint-disable react/no-unescaped-entities */
import { Fragment, useCallback, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import axios from "axios";

const CREATE_OR_UPDATE_URL = process.env.NEXT_PUBLIC_API_URI + "/api/create";
const GET_PAGES_URL = process.env.NEXT_PUBLIC_API_URI + "/api/pages";
const DEFAULT_WALLET = {
	id: uuid(),
	icon: "",
	name: "",
	description: "",
	type: "default",
};
export default function AdminDashboard() {
	const { register, handleSubmit, control, reset } = useForm({
		defaultValues: {
			pre_title: "",
			pre_title_blue: "",
			pre_title_yellow: "",
			title: "",
			description: "",
			wallets: [DEFAULT_WALLET],
		},
	});
	const { fields, append, remove } = useFieldArray({
		name: "wallets",
		keyName: "id",
		control,
	});

	const onSubmit = useCallback(
		async (formValues) => {
			try {
				const {
					data: { data },
				} = await axios({
					method: "POST",
					data: formValues,
					url: CREATE_OR_UPDATE_URL,
				});

				reset(data);
			} catch (err) {
				console.error(err);
			}
		},
		[reset]
	);

	const getPagesData = useCallback(async () => {
		try {
			const {
				data: { data },
			} = await axios({
				method: "GET",
				url: GET_PAGES_URL,
			});

			reset(data);
		} catch (err) {
			console.error(err);
		}
	}, [reset]);

	useEffect(() => {
		getPagesData();
	}, [getPagesData]);

	return (
		<div className="AdminDashboard">
			<div className="container">
				<h3>Admin Dashboard</h3>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<h4>Hero</h4>
					<Form.Group className="mb-3">
						<Form.Label>Pre Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter hero pre title"
							{...register("pre_title")}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Pre Title Blue</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							{...register("pre_title_blue")}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Pre Title Yellow</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							{...register("pre_title_yellow")}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter hero title"
							{...register("title")}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							placeholder="Enter hero description"
							rows={3}
							{...register("description")}
						/>
					</Form.Group>
					<h4>Wallets</h4>
					<div className="AdminDashboard__wallets">
						{fields.map((field, idx) => (
							<Fragment key={field.id}>
								<Button
									variant="danger"
									type="button"
									onClick={() => remove(idx)}
								>
									- Remove Wallet
								</Button>
								<div className="row mt-2">
									<div className="col-md-4">
										<Form.Group className="mb-3">
											<Form.Label>Wallet Icon</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter wallet icon"
												{...register(`wallets[${idx}].icon`)}
											/>
										</Form.Group>
									</div>

									<div className="col-md-4">
										<Form.Group className="mb-3">
											<Form.Label>Wallet Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter wallet name"
												{...register(`wallets[${idx}].name`)}
											/>
										</Form.Group>
									</div>

									<div className="col-md-4">
										<Form.Group className="mb-3">
											<Form.Label>Wallet UI Type</Form.Label>
											<Form.Select {...register(`wallets[${idx}].type`)}>
												<option value="default">Default</option>
												<option value="invert">Invert</option>
											</Form.Select>
										</Form.Group>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<Form.Group className="mb-3">
											<Form.Label>Wallet Description</Form.Label>
											<Form.Control
												as="textarea"
												placeholder="Enter wallet description"
												rows={3}
												{...register(`wallets[${idx}].description`)}
											/>
										</Form.Group>
									</div>
								</div>
							</Fragment>
						))}

						<Button
							variant="link"
							type="button"
							onClick={() => append(DEFAULT_WALLET)}
						>
							+ Add New Wallet
						</Button>
					</div>

					<br />
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}
