const getData = async () => {

    const getfromApi = await fetch("https://dummyjson.com/carts");

    const dataChange = await getfromApi.json();

    const result = dataChange.carts;

    console.log(result);

    const output = document.getElementById("showingdata");

    result.forEach((cart, index) => {

        output.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${cart.id}</td>
                <td>${cart.userId}</td>
                <td>${cart.totalProducts}</td>
                <td>${cart.totalQuantity}</td>
                <td>$${cart.total}</td>
                <td>$${cart.discountedTotal}</td>
            </tr>
        `;

    });

};

getData();