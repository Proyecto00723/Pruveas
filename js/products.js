import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function loadProducts() {

    const querySnapshot = await getDocs(collection(db, "productos"));

    const container = document.getElementById("products-container");

    container.innerHTML = "";

    querySnapshot.forEach((doc) => {

        const p = doc.data();

        container.innerHTML += `

<div class="product">

<img src="${p.images.split(',')[0]}">

<h3>${p.name}</h3>

<p>S/ ${p.price}</p>

<button onclick="viewProduct('${doc.id}')">Ver</button>

</div>

`;

    });

}

loadProducts();