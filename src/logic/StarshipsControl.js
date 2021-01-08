export default async function starShipControl() {
    let myRequest = new Request('https://swapi.dev/api/starships/');
    let starShips = [];
    let next = "";
    let response = await fetch(myRequest)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Ops! Houve um erro em nosso servidor.');
            }
        })
        .then(response => {
            response.results.forEach(element => {
                starShips.push(element)
            });
            next = response.next;
        }).catch(error => {
            console.error(error);
        });
    while (next != null) {
        myRequest = new Request(next);
        response = await fetch(myRequest)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Ops! Houve um erro em nosso servidor.');
                }
            })
            .then(response => {
                response.results.forEach(element => {
                    starShips.push(element)
                });
                next = response.next;
            }).catch(error => {
                console.error(error);
            });
    }
    return starShips;
}