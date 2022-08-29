
import {  dataFilter, } from "../src/data.js";
import athletes from  "./datamock.js";
 

 describe("dataFilter", () => {
   it("is a function", () => {
     expect(typeof dataFilter).toBe("function");
   });

   it("deberia retornar participante para colombia ", () => {
     expect(dataFilter(athletes, "Colombia", "M", "Bronze")).toEqual([
       {
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
     expect(dataFilter(athletes, "Colombia", "M", "Silver")).toEqual([
       {
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
       },
     ]);
   });

   it("deberia retornar participante para colombia ", () => {
     expect(dataFilter(athletes, "Colombia", "F", "Silver")).toEqual([
       {
         age: 30,
         event: "Judo Women's Middleweight",
         gender: "F",
         height: "176",
         medal: "Silver",
         name: "Yuri Alvear Orjuela",
         noc: "COL",
         sport: "Judo",
         team:"Colombia",
         weight: "70",
       },
     ]);
   });
 });