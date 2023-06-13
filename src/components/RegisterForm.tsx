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

	return (
		<form onSubmit={handleSubmit(handleRegistration)}>
			<label>Email</label>
			<input name="email" {...register('email', registerOptions.email)} />
			{errors?.email && <span>{errors.email.message}</span>}
			<input
				name="firstName"
				{...register('firstName', registerOptions.firstName)}
			/>
			{errors?.firstName && <span>{errors.firstName.message}</span>}
			<input name="lastName" />
			<button type="submit">Register</button>
		</form>
	);
};
export default RegisterForm;
