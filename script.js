
// Företag som ska med i listan 

const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887]
  ];

  // Skapar funktionen

  function tabellen() {
    const tabellInnehåll = document.getElementById("tabellInnehåll");
    const tabell = document.createElement("table");

    // Nedan kommer rubriken på tabellen

    const rubrikRad = tabell.insertRow();
    const rubriker = ["Company", "Location", "Year Grounded"];

    rubriker.forEach (rubrikText => {
        const th = document.createElement ("th");
        th.textContent = rubrikText;
        rubrikRad.appendChild(th);
    });

    // Nedan skapas rader i tabellen

    companies.forEach(company => {
        const rad = tabell.insertRow();
        company.forEach(info => {
            const cell = rad.insertCell();
            cell.textContent = info;
        });
    });

    tabellInnehåll.innerHTML = "";
    tabellInnehåll.appendChild(tabell);

  } 

  document.getElementById("knapp"),addEventListener("click", tabellen);