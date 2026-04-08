var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);

let faces = {
    Tetrahedron: 4,
    Cube: 6,
    Octahedron: 8,
    Dodecahedron: 12,
    Icosahedron: 20
};

let test_cases = +input[0];
let res = 0;

for (let i = 1; i <= test_cases; i++) {
    res += faces[input[i]];
}

console.log(res);