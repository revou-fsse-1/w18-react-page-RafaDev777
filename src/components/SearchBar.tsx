type SearchBarProps = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = (props: SearchBarProps) => (
	<>
		<input
			type="text"
			className="mb-8 w-[360px] px-2 py-2 text-lg rounded-lg bg-slate-200"
			value={props.query}
			onChange={(e) => props.setQuery(e.target.value)}
			placeholder="Search here for photos ..."
		/>
	</>
);

export default SearchBar;
