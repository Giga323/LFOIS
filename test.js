const cartesianProduct = (...arrays) => {
    return arrays.reduce((acc, current) => {
        const temp = [];
        acc.forEach(x => {
            current.forEach(y => {
                temp.push([...x, y]);
            });
        });
        return temp;
    }, [[]]);
};

const set1 = [1, 2];
const set2 = ['a', 'b'];
const set3 = ['x', 'y'];

const result = cartesianProduct(set1, set2, set3);
console.log(result);