const getData = async () => {

    const getfromApi = await fetch("https://dummyjson.com/posts");

    const dataChange = await getfromApi.json();

    const result = dataChange.posts;

    console.log(result);

    const output = document.getElementById("showingdata");

    result.forEach((post, index) => {

        output.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
                <td>${post.userId}</td>
            </tr>
        `;

    });

};

getData();