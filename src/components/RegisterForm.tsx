import { useForm } from 'react-hook-form';
type RegisterFormProps = {
	closeModal: () => void;
	openSnack: () => void;
};

const RegisterForm = (props: RegisterFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleRegistration = () => {
		props.closeModal();
		props.openSnack();
	};

	const registerOptions = {
		email: {
			required: 'Email is Required',
			pattern: {
				value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
				message: 'Please enter an valid email',
			},
		},
		firstName: { required: 'First name is Required' },
	};

	const dangerStyle = 'text-sm text-red-500';
	const inputStyle = 'border rounded-lg';

	return (
		<form
			onSubmit={handleSubmit(handleRegistration)}
			className="flex flex-col mt-5"
		>
			<label className="font-bold text-sm" htmlFor="email">
				User Email
			</label>
			<input
				id="email"
				{...register('email', registerOptions.email)}
				className={inputStyle}
			/>
			<span className={dangerStyle}>
				{errors?.email ? `${errors.email.message}` : null}
			</span>

			<label className="font-bold text-sm mt-3" htmlFor="firstName">
				First Name
			</label>
			<input
				id="firstName"
				{...register('firstName', registerOptions.firstName)}
				className={inputStyle}
			/>
			<span className={dangerStyle}>
				{errors?.firstName ? `${errors.firstName.message}` : null}
			</span>
			<label className="font-bold text-sm mt-3" htmlFor="lastName">
				Last Name
			</label>
			<input id="lastName" className={inputStyle} />
			<button
				type="submit"
				className="bg-sky-600 text-white py-2 rounded-lg font-semibold mt-5"
			>
				Register Now
			</button>
		</form>
	);
};
export default RegisterForm;
