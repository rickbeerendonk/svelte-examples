/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function sanitizeHTML(html) {
  const temp = document.createElement('div');
  temp.textContent = html;
  return temp.innerHTML;
}

function getDOM() {
  const elem = document.querySelector('#app');
  return elem ? sanitizeHTML(elem.innerHTML) : null;
}

let eventNo = 1;

export function logEvent(hook, props, state) {
  const tbody = document.querySelector('#result tbody');
  tbody.innerHTML += `
    <tr>
      <td>${eventNo++}</td>
      <td>${hook}</td>
      <td>${JSON.stringify(props)}</td>
      <td>${JSON.stringify(state)}</td>
      <td>${getDOM()}</td>
    </tr>
  `;
}
