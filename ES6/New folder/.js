// var Services01 = {
//     'CarsShop':{
//         'CarsWash':{
//             price : 1000 ,
//             time : "2hours",
//             days: "mon-fri"
//         }
//     }, 

//     'HomeProvider':{
//         'HomeMades':{
//             Charges : 5000 ,
//             time : "20Min",
//             days: "mon-fri"
//         }
//     },
    
    
//     'RepairingServices':{
//         'Road Repearing':{
//             Charges : 500000 ,
//             time : "as soon as possible",
//             days: "mon & wed"
//         }
//     },

// }

// var Services = [
//     'Cars',[
//         'CarsWash',[
//             price = 1000 ,
//             time = "2hours",
//             days= "mon-fri"
//         ]
//     ], 

//     'Home',[
//         'HomeMades',[
//             Charges = 5000 ,
//             time = "20Min",
//             days= "mon-fri"
//         ]
//     ],
    
    
//     'Repairing',[
//         'Road Repearing',[
//             Charges = 500000 ,
//             time = "as soon as possible",
//             days= "mon & wed"
//         ]
//     ],

// ]


// console.log(Services)


let models = [
    iPhone = [
        vx = [
            ("Ram", "4gb"), ("Price", 50000)
        ],
        v12Promax = [
            ("Ram", "6gb"), ("Price", 60000)
        ],
        v13 = [
            ("Ram", "8gb"), ("Price", 70000)
        ],
    ],
    infinix = [
        hot10 = [
            ("Ram", "8gb"), ("Price", 25000)
        ],
        hot11 = [
            ("Ram", "16gb"), ("Price", 35000)
        ],
        hot12 = [
            ("Ram", "32gb"), ("Price", 45000)
        ],
    ],
    samsung = [
        s10 = [
            ("Ram", "2gb"), ("Price", 20000)
        ],
        s11 = [
            ("Ram", "3gb"), ("Price", 30000)
        ],
        s12 = [
            ("Ram", "4gb"), ("Price", 40000)
        ],
    ]
];


let keys1 = models[0][1];
let spread_1 = [...keys1, v13Promax = [   // also add another array
    ("Ram", "8gb"), ("Price", 80000)
]];
console.log(spread_1);


let keys2 = models[1][0];
let spread_2 = [...keys2];
console.log(spread_2);


let keys3 = models[2][1];
let spread_3 = [...keys3];
console.log(spread_3);

let mobiles = {
    iPhone: {
        vx: {
            Ram: '4GB',
            Price: 1000
        },
        v12Pro: {
            Ram: '6GB',
            Price: 2000
        },
        v13Pro: {
            Ram: '8GB',
            Price: 3000
        }
    },
    infinix: {
        hot10: {
            Ram: '2GB',
            Price: 3000
        },
        hot11s: {
            Ram: '3GB',
            Price: 5000
        },
        hot12: {
            Ram: '4GB',
            Price: 6000
        }
    },
    samsung: {
        s10: {
            Ram: '8GB',
            Price: 6000
        },
        s11: {
            Ram: '10GB',
            Price: 7000
        },
        s12: {
            Ram: '12GB',
            Price: 8000
        }
    }
}



function fillMainKeys() {
    let mainKeys = Object.keys(mobiles)

    for (var i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option>${mainKeys[i]}</option>`
    }
}
fillMainKeys()

function nestedDropDown() {
    mobileModel.disabled = false

    let nestedKeys = Object.keys(mobiles[mobileName.value])
    mobileModel.innerHTML = ' '

    for (var i = 0; i < nestedKeys.length; i++) {
        mobileModel.innerHTML += `<option>${nestedKeys[i]}</option>`
    }
}

