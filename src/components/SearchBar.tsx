type SearchBarProps = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = (props: SearchBarProps) => (
	<>
		<input
			type="text"
			className=""
			value={props.query}
			onChange={(e) => props.setQuery(e.target.value)}
		/>
	</>
);

export default SearchBar;
