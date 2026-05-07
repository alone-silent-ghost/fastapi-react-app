export async function getItems() {
    const res = await fetch("http://localhost:8000/items/");
    return res.json();
  }
  
  export async function addItem(item) {
    const res = await fetch("http://localhost:8000/items/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return res.json();
  }
  