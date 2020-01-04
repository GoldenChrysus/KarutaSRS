export const isString = a => Object.prototype.toString.call(a) === "[object String]";

export const sortBy = (...cbs) => (a, b) => {
	for (const cb of cbs) {
		const aa = cb(a);
		const bb = cb(b);
		const diff = cb.desc
			? isString(aa)
				? bb.localeCompare(aa)
				: bb - aa
			: isString(aa)
				? aa.localeCompare(bb)
				: aa - bb;

		if (diff !== 0) {
			return diff;
		}
	}
	return 0;
};
export const desc = cb => ((cb.desc = true), cb);
