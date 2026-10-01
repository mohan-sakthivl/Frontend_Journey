const getData = async () => {

    const getfromApi = await fetch("https://dummyjson.com/users");

    const dataChange = await getfromApi.json();

    const result = dataChange.users;

    console.log(result);

    const output = document.getElementById("showingdata");

    result.forEach((user, index) => {

        output.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>
                    <img src="${user.image}" width="80">
                </td>
            </tr>
        `;

    });

};

getData();