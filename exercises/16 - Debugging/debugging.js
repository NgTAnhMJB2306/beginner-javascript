const people = [
    { name: 'Blue', country: 'Nam Dinh', cool: true },
    { name: 'Suns', country: 'Thai Binh', cool: true },
    { name: 'Fluer', country: 'Hung Ha', cool: true },
];

people.forEach((person, index) => {
    console.log(person.name);
    console.error(person.name);
    console.warn('M.J.Blue');
    // debugger; // break point
    console.table(people); S
    console.count('running doctorize');
    console.count(`running Doctorize for ${name}`);
    console.group("Doing some stuff");
    console.log(person.country);
    console.log(person.cool);
    console.log(person.name);
    console.log("DONE!!");
    console.groupEnd(`${person.name}`);
});

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}