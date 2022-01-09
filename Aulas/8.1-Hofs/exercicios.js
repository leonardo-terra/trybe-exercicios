const acorda = () => "Acordando!!";
const cafe = () => 'Bora tomar café !!';
const dorme = () => 'Bora mimi!!';

const doingThings = (callback) => {
    console.log(callback());
}
doingThings(acorda);
doingThings(cafe);
doingThings(dorme);

console.log(acorda());