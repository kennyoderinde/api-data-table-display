fetch('https://jsonplaceholder.typicode.com/posts')
.then(result =>  result.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data[0].title))



    
/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((data) => {
    return data.json();
}).then((objectData) => {

})*/

/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data[0].body);
    
    let tableData = "";
    data.map((values) => {
        tableData += `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`;
    })
    document.getElementById("table-body").innerHTML = tableData
})
*/




/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data[0].title);
    
    let tableData = "";
    data.map((values) => {
        tableData += `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`
    })
    document.getElementById('table-body').innerHTML =tableData
})*/


fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data[0].title);

let tableData = "";
data.map((values) => {
    tableData += `<tr>
        <td>${values.albumId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><img src= "${values.url}"/></td>
        <td><img src= "${values.thumbnailUrl}"/></td>
      </tr>`
    })
    document.getElementById('table-body').innerHTML =tableData
})


/*async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const {userId, id, title } = await response.json();

    

}

loadIntoTable("./data.json", document.querySelector("table"));

*/