const counter = document.getElementById("counter");
const wrapper = document.getElementById("wrapper");
const listItems = document.getElementById("listItems");
const loading = document.getElementById("loading");


let data = [];
let page = 0;
let totalPages;
let load = true;

showLoading(false);

wrapper.addEventListener("scroll", () => {
  let clientHeight = wrapper.clientHeight;
  let scrollTop = wrapper.scrollTop;
  let scrollHeight = wrapper.scrollHeight;
  console.log(clientHeight + scrollTop, " = ", scrollHeight);
  if (clientHeight + scrollTop >= scrollHeight && load) {
    console.log("fetch data...");
    getData();
  }
});

function showLoading(bool) {
  if (bool) loading.style.display = "inline-block";
  else loading.style.display = "none";
}

function renderData() {
  let html = ``;

  for (let i = 0; i < data.length; i++) {
    html =
      html +
      `<div class="item">
      <div class="top">
        <div> ${i}</div>
        <div class="icon">✈ :</div>
        <div class="title">${data[i].airline[0].name}</div>
      </div>
      
      <div class="item-bottom">
        <div class="icon">🙂 :</div>
        <div class="user">${data[i].name}</div>
      </div>
      </div>`;
  }

  listItems.innerHTML = html;
  setTimeout(() => {
    load = true;
  }, 20);
}

function renderCountPage(page) {
  counter.innerHTML = `<h1>${page}</h1>`;
}

function storeMaxPage(page) {
  localStorage.setItem("max-page", page);
}

function storeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getMaxPageLocal() {
  return localStorage.getItem("max-page");
}

function getDataLocal(key) {
  return localStorage.getItem(key);
}

const getData = async () => {
  showLoading(true);
  load = false;

  try {
    const res = await axios.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${10}`
    );

    totalPages = res.data.totalPages;
    data = data.concat(res.data.data);
    showLoading(false);
    renderCountPage(page);
    renderData();

    storeMaxPage(page);
    storeData(page, res.data.data);

    page = page + 1;
  } catch (error) {
    console.log(error);
    showLoading(false);
  }
};

let maxPageLocal = parseInt(getMaxPageLocal());
for (let i = 0; i <= maxPageLocal; i++) {
  let data_by_key = [];
  if (getDataLocal(i)) data_by_key = JSON.parse(getDataLocal(i));
  data = data.concat(data_by_key);
}

if (data.length > 0) {
  page = maxPageLocal;
  renderCountPage(maxPageLocal);
  renderData(data);
} else {
  getData();
}
