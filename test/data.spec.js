import athletes from "./datamock.js";
import { percentage } from '../src/data.js';
import { dataFilter } from "../src/data.js";
import { countryData,genderData,medalData } from "../src/data.js";


describe("dataFilter", () => {
    it("is a function", () => {
        expect(typeof dataFilter).toBe("function");
    });
    it("deberia retornar participante para colombia ", () => {
        expect(dataFilter(athletes, "Colombia", "M", "Bronze")).toEqual([{
                age: 21,
                event: "Weightlifting Men's Lightweight",
                gender: "M",
                height: "165",
                medal: "Bronze",
                name: "Lus Javier Mosquera Lozano",
                noc: "COL",
                sport: "Weightlifting",
                team: "Colombia",
                weight: "64",
            },
            {
                age: 22,
                event: "Cycling Men's BMX",
                gender: "M",
                height: "178",
                medal: "Bronze",
                name: "Carlos Alberto Ramrez Yepes",
                noc: "COL",
                sport: "Cycling",
                team: "Colombia",
                weight: "65",
            },
        ]);
    });
    it("Si no existe atleta del pais indicado, retorna un arreglo vacio", () => {
        expect(dataFilter(athletes, "Argentina", "M", "Bronze")).toStrictEqual([]);
    });
    it("deberia retornar participante para colombia ", () => {
        expect(dataFilter(athletes, "Colombia", "M", "Silver")).toEqual([{
            age: 24,
            event: "Boxing Men's Light-Flyweight",
            gender: "M",
            height: "165",
            medal: "Silver",
            name: "Yurberjen Herney Martnez Rivas",
            noc: "COL",
            sport: "Boxing",
            team: "Colombia",
            weight: "49",
        }, ]);
    });
    it("deberia retornar participante para colombia ", () => {
        expect(dataFilter(athletes, "Colombia", "F", "Silver")).toEqual([{
            age: 30,
            event: "Judo Women's Middleweight",
            gender: "F",
            height: "176",
            medal: "Silver",
            name: "Yuri Alvear Orjuela",
            noc: "COL",
            sport: "Judo",
            team: "Colombia",
            weight: "70",
        }, ]);
    });
});

describe("countryData", () => {
    it('is a function', () => {
        expect(typeof countryData).toBe('function');
    });
    it('return paises en orden ', () => {
        expect(countryData(athletes)).toEqual(
            ["Azerbaijan",
                "Colombia",
                "France",
                "Iran",
                "Italy",
                "Russia",
            
            ]);
    });
});
describe("genderData", () => {
    it('is a function', () => {
        expect(typeof genderData).toBe('function');
    });
    it('return genero en orden ', () => {
        expect(genderData(athletes)).toEqual(
            ["F", "M"]);
    });
});
describe("medalData", () => {
    it('is a function', () => {
        expect(typeof medalData).toBe('function');
    });
    it('return medalla en orden ', () => {
        expect(medalData(athletes)).toEqual(
            ["Bronze", "Gold", "Silver"]);
    });
});


let arrayFil = [{
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
    },
    {
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
    },
    {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
    },
    {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
    },
    {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
    },
]

let arrayFil2 = [{
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
    },
    {
        "name": "Patimat Abakarova",
        "gender": "M",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
    },
    {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
    },
    {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
    },
    {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
    },
]

describe('percentage', () => {
    it('is a function', () => {
        expect(typeof percentage).toBe('function');
    });
    it('retuns `calcula el porcentaje de mujeres participantes`', () => {
        expect(percentage(arrayFil)).toEqual(20);
    });
    it('retuns `calcula el porcentaje de mujeres participantes`', () => {
        expect(percentage(arrayFil2)).toEqual(0);
    });
});