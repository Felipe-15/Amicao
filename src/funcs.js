const getDate = (dateAnimal) => {
    let date = new Date();
    let rawDate = [
        `${date.getFullYear()}`,
        `${
            date.getMonth() < 10 && date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1).toString()
                : date.getMonth() >= 9
                ? (date.getMonth() + 1).toString()
                : "0" + (date.getMonth() + 1).toString()
        }`,
        `${
            date.getDate().toString().length == 2
                ? date.getDate()
                : "0" + date.getDate().toString()
        }`,
    ];
    let formatedDate = rawDate.join("-");
    let now = new Date(formatedDate);
    let past = new Date(dateAnimal);
    let diff = Math.abs(now.getTime() - past.getTime());
    let days = diff / (1000 * 60 * 60 * 24);
    let limit = 14;
    if (days <= limit) {
        return true;
    } else {
        return false;
    }
};

const makeID = (arrayMain) => {
    let test = false;
    let id = "";
    let cont = 0;
    while (!test) {
        id = (Math.random() * 100).toString(36).replace(".", "");
        for (let x = 0; x < arrayMain.length; x++) {
            if (arrayMain[x].idShopCar == id) {
                test = false;
                break;
            } else {
                cont++;
            }
            if (cont == arrayMain.length) {
                test = true;
            }
        }
    }
    return id;
};

export { getDate, makeID };
