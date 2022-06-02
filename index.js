
// const fc = async (us, arg) => {
//   const ol = document.getElementsByClassName('users');
//   for (const u of us) {
//     let i= 0;
//     const company= u.uris.company;
//     if (company === argg.uri) {
//       const li = document.createElement('li');
//       li.innerHTML= `lalalalla`;
//       ol[i].appendChild(li);
//       i++;
//     }
//   }
// };


const companiesFunction = async (arguments) => {

  const table= document.getElementsByClassName('table')[0];
  for (const argument of arguments) {
    const tr = document.createElement('tr');
    tr.innerHTML = `            <td class="firstTd">
                <ul>
                    <li>${argument.name}</li>
                </ul>
            </td>
            <td>
                <ol class="users">
                    <li>Hello</li>
                </ol>
            </td>`
    table.appendChild(tr);
    // await fc(users, argument);
  }
}



(async () => {

  const response =  await fetch('http://localhost:3000/companies/');
  const data = await response.json();
  await companiesFunction(data);

})();









