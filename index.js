let btn = document.querySelector("#btn");
let url = "https://fakestoreapi.com";

class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

async function addProduct(data) {
    try {
        const response = await axios.post(`${url}/products`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

let imgInput = document.querySelector("#img");

function encodeImageFileAsURL(img) {
    return new Promise((resolve, reject) => {
        var file = img.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            console.log('RESULT', reader.result);
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

btn.addEventListener("click", async function () {
    let prdName = document.querySelector("#prdName").value;
    let prdPrice = document.querySelector("#prdPrice").value;
    let imgData = await encodeImageFileAsURL(imgInput);
    let product = new Product(prdName, prdPrice, imgData);
    addProduct(product);
    console.log(product);
});
