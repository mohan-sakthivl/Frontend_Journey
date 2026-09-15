const getData = async () => {

    const getfromApi = await fetch("https://dummyjson.com/todos");

    const dataChange = await getfromApi.json();

    const result = dataChange.todos;

    console.log(result);

    const output = document.getElementById("showingdata");

    result.forEach((todo, index) => {

        output.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${todo.todo}</td>
                <td>${todo.completed ? "Completed" : "Not Completed"}</td>
                <td>${todo.userId}</td>
            </tr>
        `;

    });

};

getData();