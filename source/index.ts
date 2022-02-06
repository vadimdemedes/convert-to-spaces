const convertToSpaces = (input: string, spaces = 2): string => {
	return input.replace(/^\t+/gm, $1 => ' '.repeat($1.length * spaces));
};

export default convertToSpaces;
