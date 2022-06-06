
const createTable = async (arguments, usersArray) => {

  const table= document.getElementsByClassName('table')[0];
  let i = 0;
  for (const argument of arguments) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="firstTd">
                        <ul>
                            <li>${argument.name}</li>
                        </ul>
                    </td>
                    <td class="td">
                        <ol class="users">
                        </ol>
                    </td>`
    table.appendChild(tr);
    const filter = usersArray.filter( n => n.company ===  argument.uri);
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

  const companiesResponse =  await fetch('http://localhost:3000/companies/');
  const companiesList = await companiesResponse.json();

  const usersResponse =  await fetch('http://localhost:3000/users/');
  const usersList = await usersResponse.json();
  const usersCompany = [];

  for (const user of usersList) {
    const {company} = user.uris;
    const {name} = user;
    usersCompany.push({name, company});
  }

  await createTable(companiesList, usersCompany);

})();









