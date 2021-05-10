const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const input = document.querySelector("input[type=text]");
const items = JSON.parse(localStorage.getItem("allList")) || [];
const btn = document.querySelectorAll("button")
const clearBtn = document.querySelector("input[type=button")

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("allList", JSON.stringify(items))

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
                <label for="item${i}">${plate.text}</label>
                <button>&times</button>
            </li>
        `;
    })
    .join("");


    // delete
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.parentElement.children[0].dataset.index
            btn.parentElement.remove()
            items.splice(index, 1)
            populateList(items, itemsList)
            localStorage.setItem("allList", JSON.stringify(items))
        })
    })
}


function clearAll(){
    items.length = 0;
    populateList(items, itemsList)
    localStorage.removeItem("allList")
}

function toggleDone(e){
    if(!e.target.matches("input")) return
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem("allList", JSON.stringify(items))
    populateList(items, itemsList)
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clearBtn.addEventListener("click", clearAll)


populateList(items, itemsList)
