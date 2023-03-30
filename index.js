"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tableBody = document.getElementById("tableBody");
const getData = (link) => __awaiter(void 0, void 0, void 0, function* () {
    const myProducts = yield fetch(link)
        .then(response => response.json())
        // .then(data => data)
        .catch(error => console.error(error));
    return myProducts;
});
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonProducts = yield getData("https://dummyjson.com/products");
    const products = JSON.parse(jsonProducts);
    // console.log(products.products); 
});
const jsonProducts = getData("https://dummyjson.com/products");
jsonProducts.then(res => {
    res.products.map((item, index) => {
        // const row = `<tr><td>${item.id}</td><td>${item.title}</td><td></td><td></td><td></td></tr>`;
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = String(item.id);
        const td2 = document.createElement("td");
        td2.innerHTML = String(item.title);
        const td3 = document.createElement("td");
        td3.innerHTML = String(item.description);
        const td4 = document.createElement("td");
        td4.innerHTML = String(item.brand);
        const td5 = document.createElement("td");
        td5.innerHTML = String(item.category);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tr);
    });
});
//# sourceMappingURL=index.js.map