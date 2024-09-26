function tagFunction(array, ...args){
    console.log(array);
    console.log(args);
}

test('Test tag function', () => {
    const name = 'hallo';
    const lastName = 'world';

    tagFunction`Hello ${name} ${lastName} welcome to test tag function`;
    tagFunction `Bye ${name} ${lastName} see you again`;

});

test(`Test tag function with sql`, () => {
    const name = 'hallo';
    const posisi_id = 1;

    tagFunction`SELECT * FROM nd_user WHERE name = '${name}' AND posisi_id = ${posisi_id}`;

});

