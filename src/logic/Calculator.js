import Calc from "../logic/Calc";

export default function Calculator(distance, starShips) {

    let calc = starShips.map(element => {
        let stop = Calc(distance, element.MGLT, element.consumables);

        return {
            name: element.name,
            stops: stop
        }
    })
    calc = calc.filter((element) => {
        return !isNaN(element.stops);
    })
    return calc.sort((a, b) => {
        return b.stops - a.stops;
    });
}