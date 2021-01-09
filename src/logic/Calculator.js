import Calc from "../logic/Calc";

export default function Calculator(distance, starShips) {

    let calc = starShips.map(element => {
        let stop = Calc(distance, element.MGLT, element.consumables);

        return {
            name: element.name,
            crew: element.crew,
            passengers: element.passengers,
            cargo: element.cargo_capacity,
            stops: stop,
            mglt: element.MGLT
        }
    })
    calc = calc.filter((element) => {
        return !isNaN(element.stops);
    })
    return calc.sort((a, b) => {
        return a.stops - b.stops;
    });
}