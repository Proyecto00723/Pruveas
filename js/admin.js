import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function createProduct(e) {

    e.preventDefault();

    const product = {

        name: document.getElementById("product-name").value,

        price: parseFloat(document.getElementById("product-price").value),

        code: document.getElementById("product-code").value,

        category: document.getElementById("product-category").value,

        stock: parseInt(document.getElementById("product-stock").value),

        images: document.getElementById("product-images").value,

        video: document.getElementById("product-video").value,

        sizes: document.getElementById("product-sizes").value,

        colors: document.getElementById("product-colors").value,

        description: document.getElementById("product-description").value,

        createdAt: new Date().toISOString()

    };

    try {

        await addDoc(collection(db, "productos"), product);

        alert("Producto guardado");

        document.getElementById("product-form").reset();

    } catch (err) {

        console.error(err);

        alert("Error al guardar");

    }

}