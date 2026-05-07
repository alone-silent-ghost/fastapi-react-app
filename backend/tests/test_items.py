from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_items_empty():
    response = client.get("/items/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert response.json() == []

def test_create_item():
    new_item = {"name": "Test Item", "description": "Descripción de prueba"}
    response = client.post("/items/", json=new_item)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == new_item["name"]
    assert data["description"] == new_item["description"]
    assert "id" in data

def test_read_items_after_insert():
    response = client.get("/items/")
    assert response.status_code == 200
    items = response.json()
    assert len(items) >= 1
    assert any(item["name"] == "Test Item" for item in items)
