const getData = async () => {

    const getfromApi = await fetch("https://dummyjson.com/products");

    const dataChange = await getfromApi.json();

    const result = dataChange.products;

    console.log(result);

    const output = document.getElementById("showingdata");

    result.forEach((product, index) => {

        output.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td>${product.rating}</td>
                <td>
                    <img src="${product.thumbnail}" width="80">
                </td>
            </tr>
        `;

    });

};

getData();