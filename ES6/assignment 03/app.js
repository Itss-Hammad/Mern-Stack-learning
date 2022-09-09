
let mobiles = {
    iphone: {
        vx: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "70000",

        },
        v10: {
            Ram: '3GB',
            Rom: "64GB",
            Price: "80000",
        },
        v11: {
            Ram: '3GB',
            Rom: "32GB",
            Price: "90000",
        }
    },
    Redmi: {
        c13: {
            Ram: '2GB',
            Rom: "32GB",
            Price: "15000",
        },
        c17: {
            Ram: '3GB',
            Rom: "32GB",
            Price: "18000",
        },
        c17: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "30000",
        }
    },
    samsung: {
        s11: {
            Ram: '4GB',
            Rom: "32GB",
            Price: "70,000",
        },
        s12: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "80,000",
        },
        s13: {
            Ram: '6GB',
            Rom: "64GB",
            Price: "90,000",
        }
    }
}


let keys = Object.keys(mobiles);

let mobileName = document.getElementById('mobileName')
let mobileModel = document.getElementById('mobileModel')
let list = document.getElementById('list')

function display(mobileData) {
    mobileData.forEach(function(value) {
        mobileName.innerHTML += `<option>${value}</option>`
    });
}
display(keys)


function clickItem() {
    mobileModel.disabled = false
    let mobileModelData = Object.keys(mobiles[mobileName.value])
    mobileModel.innerHTML = ''

    mobileModelData.forEach(function(value) {
        mobileModel.innerHTML += `<option>${value}</option>`
    });
}


function search() {
    let details = Object.values(mobiles[mobileName.value][mobileModel.value])
    list.innerHTML = ''

    details.filter(function (e) {
        list.innerHTML += `<li>${e}</li>`
    })
}