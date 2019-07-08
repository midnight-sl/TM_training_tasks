let customMap = new Map();

customMap.set('this is boolean', true);
customMap.set('this is object', {1:'one', 2:'two'});
customMap.set([1,2,3,4,5], 'this is array');
customMap.set('string', 'this is string');

console.log(customMap);
console.log(customMap.has('this is object'));
console.log(customMap.size);
console.log(customMap.delete('string'));

for(const el of customMap.entries()) {
    console.error(el, 'el')
}

console.log(customMap.clear());
console.log(customMap);
