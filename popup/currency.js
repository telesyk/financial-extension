const appElement = document.getElementById('app');
const api = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const currency = ['EUR', 'USD', 'HUF'];

function handleJSONResponse(response) {
  return response.json()
    .then(json => {
      if (response.ok) {
        return json
      } else {
        return Promise.reject(Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText
        }))
      }
    })
}

const createItem = (item) => {
  const tableRow = document.createElement('tr');
  const title = document.createElement('td'); // ex. Dollar
  const cc = document.createElement('td'); // ex. 1 USD
  const rate = document.createElement('td'); // ex. 23.03 UAH

  title.textContent = item.txt;
  cc.textContent = `1 ${item.cc}`;
  rate.textContent = `${item.rate} UAH`;
  tableRow.appendChild(title);
  tableRow.appendChild(cc);
  tableRow.appendChild(rate);

  return tableRow;
};

function handleData(data) {
  const table = document.createElement('table');
  const filtered = data.filter(curr => currency.includes(curr.cc));

  filtered.forEach(item => table.appendChild(createItem(item)));

  appElement.appendChild(table);
}

fetch(api)
  .then(handleJSONResponse)
  .then(handleData)
  .catch(error => console.log(error));
