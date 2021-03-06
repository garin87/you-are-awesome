// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (Property) => {
	let Obj = {};
	Object.defineProperty(Obj, Property, {
		value: 1,
		enumerable: true,
	});
	return Obj; 
};
const createNotEnumerableProperty = (Property) => {
 return Symbol(Property);;
};
const createProtoMagicObject = () => {};
const incrementor = () => { 
	let count=+1;
	return valueOf(incrementor);
	
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;