const tableBody = document.getElementById("tableBody")!;

const getData = async (link: string) : Promise<any> => {
    const myProducts = await fetch(link)
        .then(response => response.json())
        // .then(data => data)
        .catch(error => console.error(error));
    return myProducts;
}

const fetchProducts = async () => {
    const jsonProducts = await getData("https://dummyjson.com/products");
    const products = JSON.parse(jsonProducts);
    // console.log(products.products); 
}

const jsonProducts = getData("https://dummyjson.com/products");
jsonProducts.then(res => {
    res.products.map((item : {id: number, title: string, description: string, brand: string, category: string}, index : number) => {
        // const row = `<tr><td>${item.id}</td><td>${item.title}</td><td></td><td></td><td></td></tr>`;
        const tr = document.createElement("tr");
        const td1 = document.createElement("td")
        td1.innerHTML = String(item.id);
        const td2 = document.createElement("td")
        td2.innerHTML = String(item.title);
        const td3 = document.createElement("td")
        td3.innerHTML = String(item.description);
        const td4 = document.createElement("td")
        td4.innerHTML = String(item.brand);
        const td5 = document.createElement("td")
        td5.innerHTML = String(item.category);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tableBody?.appendChild(tr);
    });
    
});
