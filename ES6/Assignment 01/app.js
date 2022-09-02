let EcommerceShop = {
    SelectProduct :{},
    IMac: {
        MacbookPro: {
            Ram: '16GB',
            ssd: '520GB',
            Generation: "4rth",
            Price: "80000"
            
        },
        MacbookM2: {
            Ram: '32GB',
            ssd: '520GB',
            Generation: "9rth",
            Price: "200000"
        },
        MacbookM1: {
            Ram: '33GB',
            ssd: '256GB',
            Generation: "8rth",
            Price: "170000"
        },
    },
    
    DELL: {
        Inspiron: {
            Ram: '12GB',
            ssd: '520GB',
            Generation: "3rth",
            Price: "36000"
            
        },
        UltraBook: {
            Ram: '32GB',
            ssd: '2TB',
            Generation: "11rth",
            Price: "230000"
        },
        SpaceBook: {
            Ram: '33GB',
            ssd: '256GB',
            Generation: "8rth",
            Price: "156000"
        },
    },
HP: {
        EliteBook: {
            Ram: '12GB',
            ssd: '520GB',
            Generation: "3rth",
            Price: "36000"
            
        },
        PremiumBook: {
            Ram: '32GB',
            ssd: '2TB',
            Generation: "11rth",
            Price: "230000"
        },
        EliteBookPro: {
            Ram: '33GB',
            ssd: '256GB',
            Generation: "8rth",
            Price: "156000"
        },
    },
    samsung: {
        s10: {
            Ram: '12GB',
            Rom: '256GB',
           Chipset: "Snapdragon668",
            Price: "120000"
        },
        s22Ultra: {
            Ram: '16GB',
            Rom: '256GB',
           Chipset: "Snapdragon888",
            Price: "198000"
        },
        s22: {
            Ram: '12GB',
            Rom: '256GB',
           Chipset: "Snapdragon668",
            Price: "145000"
        },
    }
}

var mobileName = document.getElementById('EcommerceShopName')
var mobileModel = document.getElementById('EcommerceShopModel')
var TextOutput = document.getElementById('TextOutput')

function fillMainKeys() {
    let mainKeys = Object.keys(EcommerceShop)

    for (var i = 0; i < mainKeys.length; i++) {
        EcommerceShopName.innerHTML += `<option>${mainKeys[i]}</option>`
    }
}
fillMainKeys()

function nestedDropDown() {
    mobileModel.disabled = false

    let nestedKeys = Object.keys(EcommerceShop[EcommerceShopName.value])
    mobileModel.innerHTML = ' '

    for (var i = 0; i < nestedKeys.length; i++) {
        mobileModel.innerHTML += `<option>${nestedKeys[i]}</option>`
    }
}

function check() {
    TextOutput.innerHTML = `EcommerceShop Name: ${EcommerceShopName.value} <br>
     EcommerceShop Model: ${EcommerceShopModel.value}` 
}