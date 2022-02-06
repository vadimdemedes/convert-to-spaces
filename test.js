import test from 'ava';
import tabsToSpaces from './dist/index.js';

const input = `
function someFunc() {
	if (a) {
		someOtherFunc();
	}
}
`.trim();

test('convert tabs to spaces', t => {
	t.is(
		tabsToSpaces(input),
		[
			'function someFunc() {',
			'  if (a) {',
			'    someOtherFunc();',
			'  }',
			'}',
		].join('\n'),
	);
});

test('use custom amount of spaces', t => {
	t.is(
		tabsToSpaces(input, 4),
		[
			'function someFunc() {',
			'    if (a) {',
			'        someOtherFunc();',
			'    }',
			'}',
		].join('\n'),
	);
});

test('convert only leading tabs', t => {
	t.is(tabsToSpaces('\t\thello("\t")'), '    hello("\t")');
});
