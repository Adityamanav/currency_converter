// ===== CURRENCY LIST (All major world currencies) =====
const currencies = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound Sterling",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  INR: "Indian Rupee",
  NZD: "New Zealand Dollar",
  SGD: "Singapore Dollar",
  HKD: "Hong Kong Dollar",
  KRW: "South Korean Won",
  SEK: "Swedish Krona",
  NOK: "Norwegian Krone",
  DKK: "Danish Krone",
  RUB: "Russian Ruble",
  BRL: "Brazilian Real",
  ZAR: "South African Rand",
  MXN: "Mexican Peso",
  TRY: "Turkish Lira",
  AED: "UAE Dirham",
  SAR: "Saudi Riyal",
  THB: "Thai Baht",
  IDR: "Indonesian Rupiah",
  MYR: "Malaysian Ringgit",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  CZK: "Czech Koruna",
  HUF: "Hungarian Forint",
  ILS: "Israeli New Shekel",
  CLP: "Chilean Peso",
  ARS: "Argentine Peso",
  COP: "Colombian Peso",
  PEN: "Peruvian Sol",
  EGP: "Egyptian Pound",
  NGN: "Nigerian Naira",
  PKR: "Pakistani Rupee",
  BDT: "Bangladeshi Taka",
  VND: "Vietnamese Dong",
  TWD: "New Taiwan Dollar",
  QAR: "Qatari Riyal",
  KWD: "Kuwaiti Dinar",
  BHD: "Bahraini Dinar",
  OMR: "Omani Rial",
  JOD: "Jordanian Dinar",
  LKR: "Sri Lankan Rupee",
  NPR: "Nepalese Rupee",
  MAD: "Moroccan Dirham",
  KES: "Kenyan Shilling",
  GHS: "Ghanaian Cedi",
  UAH: "Ukrainian Hryvnia",
  RON: "Romanian Leu",
  BGN: "Bulgarian Lev",
  HRK: "Croatian Kuna",
  ISK: "Icelandic Krona",
  XOF: "West African CFA Franc",
  XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar",
  JMD: "Jamaican Dollar",
  TTD: "Trinidad and Tobago Dollar",
  BBD: "Barbadian Dollar",
  BSD: "Bahamian Dollar",
  BZD: "Belize Dollar",
  GTQ: "Guatemalan Quetzal",
  HNL: "Honduran Lempira",
  NIO: "Nicaraguan Cordoba",
  CRC: "Costa Rican Colon",
  PAB: "Panamanian Balboa",
  DOP: "Dominican Peso",
  CUP: "Cuban Peso",
  UYU: "Uruguayan Peso",
  PYG: "Paraguayan Guarani",
  BOB: "Bolivian Boliviano",
  VES: "Venezuelan Bolivar",
  GYD: "Guyanese Dollar",
  SRD: "Surinamese Dollar",
  FJD: "Fijian Dollar",
  PGK: "Papua New Guinean Kina",
  SBD: "Solomon Islands Dollar",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  TOP: "Tongan Pa'anga",
  MNT: "Mongolian Tugrik",
  KZT: "Kazakhstani Tenge",
  UZS: "Uzbekistani Som",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  AZN: "Azerbaijani Manat",
  GEL: "Georgian Lari",
  AMD: "Armenian Dram",
  BYN: "Belarusian Ruble",
  MDL: "Moldovan Leu",
  ALL: "Albanian Lek",
  MKD: "Macedonian Denar",
  RSD: "Serbian Dinar",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  MUR: "Mauritian Rupee",
  SCR: "Seychellois Rupee",
  MVR: "Maldivian Rufiyaa",
  AFN: "Afghan Afghani",
  IRR: "Iranian Rial",
  IQD: "Iraqi Dinar",
  SYP: "Syrian Pound",
  LBP: "Lebanese Pound",
  YER: "Yemeni Rial",
  ETB: "Ethiopian Birr",
  TZS: "Tanzanian Shilling",
  UGX: "Ugandan Shilling",
  RWF: "Rwandan Franc",
  BIF: "Burundian Franc",
  MWK: "Malawian Kwacha",
  ZMW: "Zambian Kwacha",
  MZN: "Mozambican Metical",
  AOA: "Angolan Kwanza",
  NAD: "Namibian Dollar",
  BWP: "Botswana Pula",
  SZL: "Swazi Lilangeni",
  LSL: "Lesotho Loti",
  GNF: "Guinean Franc",
  SLL: "Sierra Leonean Leone",
  LRD: "Liberian Dollar",
  CDF: "Congolese Franc",
  DJF: "Djiboutian Franc",
  SOS: "Somali Shilling",
  ERN: "Eritrean Nakfa",
  SDG: "Sudanese Pound",
  SSP: "South Sudanese Pound",
  MGA: "Malagasy Ariary",
  KMF: "Comorian Franc",
  STN: "Sao Tome and Principe Dobra",
  CVE: "Cape Verdean Escudo",
  GMD: "Gambian Dalasi",
  GIP: "Gibraltar Pound",
  FKP: "Falkland Islands Pound",
  SHP: "Saint Helena Pound",
  ANG: "Netherlands Antillean Guilder",
  AWG: "Aruban Florin",
  KYD: "Cayman Islands Dollar",
  BMD: "Bermudian Dollar"
};

// ===== DOM ELEMENTS =====
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById('swap-btn');
const resultAmount = document.getElementById('result-amount');
const resultRate = document.getElementById('result-rate');
const resultTime = document.getElementById('result-time');
const themeToggle = document.getElementById('theme-toggle');

// ===== POPULATE DROPDOWNS =====
function populateCurrencies() {
  const sorted = Object.keys(currencies).sort();

  sorted.forEach(code => {
    const option1 = document.createElement('option');
    option1.value = code;
    option1.textContent = `${code} - ${currencies[code]}`;
    fromSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = code;
    option2.textContent = `${code} - ${currencies[code]}`;
    toSelect.appendChild(option2);
  });

  // Default values
  fromSelect.value = 'USD';
  toSelect.value = 'INR';
}

// ===== CONVERT CURRENCY =====
async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount < 0) {
    alert('Please enter a valid amount');
    return;
  }

  if (from === to) {
    resultAmount.textContent = `${amount.toFixed(2)} ${from} = ${amount.toFixed(2)} ${to}`;
    resultRate.textContent = `Exchange Rate: 1 ${from} = 1 ${to}`;
    resultTime.textContent = `Updated: ${new Date().toLocaleString()}`;
    return;
  }

  convertBtn.classList.add('loading');
  convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';

  try {
    // Free API - no key required
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    if (data.result === 'success' && data.rates[to]) {
      const rate = data.rates[to];
      const converted = amount * rate;

      resultAmount.textContent = `${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${from} = ${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} ${to}`;
      resultRate.textContent = `Exchange Rate: 1 ${from} = ${rate.toFixed(6)} ${to}`;
      resultTime.textContent = `Updated: ${new Date().toLocaleString()}`;
    } else {
      throw new Error('Currency not supported or API error');
    }
  } catch (error) {
    console.error(error);
    resultAmount.textContent = 'Conversion failed';
    resultRate.textContent = 'Please check your internet connection';
    resultTime.textContent = '';
  } finally {
    convertBtn.classList.remove('loading');
    convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert';
  }
}

// ===== SWAP CURRENCIES =====
function swapCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
}

// ===== THEME TOGGLE =====
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ===== LOAD THEME FROM STORAGE =====
function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// ===== EVENT LISTENERS =====
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);
themeToggle.addEventListener('click', toggleTheme);

// Live convert on change (optional)
amountInput.addEventListener('input', () => {
  if (amountInput.value && !isNaN(amountInput.value)) {
    convertCurrency();
  }
});

fromSelect.addEventListener('change', convertCurrency);
toSelect.addEventListener('change', convertCurrency);

// ===== INIT =====
populateCurrencies();
loadTheme();
convertCurrency(); // Initial conversion