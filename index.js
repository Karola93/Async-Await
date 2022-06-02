
const companiesFunction = async (arguments, usersArray) => {

  const table= document.getElementsByClassName('table')[0];
  let i = 0;
  for (const argument of arguments) {
    const tr = document.createElement('tr');
    tr.innerHTML = `            <td class="firstTd">
                <ul>
                    <li>${argument.name}</li>
                </ul>
            </td>
            <td class="td">
                <ol class="users">
                </ol>
            </td>`
    table.appendChild(tr);
    const filter = usersArray.filter(n => n.company ===  argument.uri);
    console.log(filter);
    for (const filterElement of filter) {
        const ol = document.getElementsByClassName('users')[i];
        const li = document.createElement('li');
        li.innerHTML = `${filterElement.name}`
        ol.appendChild(li);
    }
    i++
  }
}

(async () => {

  const response =  await fetch('http://localhost:3000/companies/');
  const data = await response.json();

  const res =  await fetch('http://localhost:3000/users/');
  const users = await res.json();
  const usersCompany = [];

  for (const user of users) {
    const {company} = user.uris;
    const {name} = user;
    usersCompany.push({name, company});
  }

  await companiesFunction(data, usersCompany);

})();









