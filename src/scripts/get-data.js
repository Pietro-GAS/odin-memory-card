export async function getData(values) {
    const root = 'htps://pokeapi.co/api/v2/pokemon/';
    
    // write script to determine max id value

    const id = randInt(values);
    const url = root + id + '/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json(); // check documentation for object structure
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

export function randInt(values, max) {
    const rand = Math.ceil(Math.random()*max);
    // If the returned number is already present, randomize again
    if (values.includes(rand)) {
        return randInt(values, max);
    } else {
        return rand;
    }
}