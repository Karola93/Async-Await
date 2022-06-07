const createTable = async (listOfCompanies, usersArray) => {

    const table = document.getElementById('table');
    let i = 0;

    for (const company of listOfCompanies) {

        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="firstTd">
                        <ul>
                            <li>${company.name}</li>
                        </ul>
                    </td>
                    <td class="td">
                        <ol class="users">
                        </ol>
                    </td>`

        table.appendChild(tr);
        const filterUsersOfCompany = usersArray.filter( user => user.company === company.uri);

        for (const filterElement of filterUsersOfCompany) {
            const usersOfCompanyList = document.getElementsByClassName('users')[i];
            const companyUser = document.createElement('li');
            companyUser.innerHTML = `${filterElement.name}`
            usersOfCompanyList.appendChild(companyUser);
        }
        i++
    }
}

(async () => {

    const companiesResponse = await fetch('http://localhost:3000/companies/');
    const companiesList = await companiesResponse.json();

    const usersResponse = await fetch('http://localhost:3000/users/');
    const usersList = await usersResponse.json();
    const usersCompany = [];

    for (const user of usersList) {
        const {company} = user.uris;
        const {name} = user;
        usersCompany.push({name, company});
    }

    await createTable(companiesList, usersCompany);

})();









