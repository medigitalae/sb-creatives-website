"""Backend API tests for SB Creatives site."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or "https://creative-hub-1617.preview.emergentagent.com"
BASE_URL = BASE_URL.rstrip("/")


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "SB Creatives" in r.json().get("message", "")


def test_contact_create_and_persist(client):
    tag = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": f"{tag} Tester",
        "email": f"{tag}@example.com",
        "company": "TestCo",
        "phone": "1234567",
        "service": "Brand & Creative",
        "budget": "$10k-$25k",
        "timeline": "1-3 months",
        "message": "Hello from pytest",
        "consent": True,
    }
    r = client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["email"] == payload["email"]
    assert data["service"] == payload["service"]
    assert data["consent"] is True
    assert "id" in data

    # verify persistence via GET
    r2 = client.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    emails = [c["email"] for c in r2.json()]
    assert payload["email"] in emails


def test_contact_missing_required_fields(client):
    r = client.post(f"{BASE_URL}/api/contact", json={"name": "x"})
    assert r.status_code == 422


def test_contact_invalid_email(client):
    r = client.post(f"{BASE_URL}/api/contact", json={
        "name": "x", "email": "not-an-email", "service": "Brand", "message": "hi"
    })
    assert r.status_code == 422


def test_contact_consent_default_false(client):
    tag = f"TEST_{uuid.uuid4().hex[:8]}"
    r = client.post(f"{BASE_URL}/api/contact", json={
        "name": tag, "email": f"{tag}@example.com",
        "service": "Digital & Web", "message": "no consent"
    })
    assert r.status_code == 200
    assert r.json()["consent"] is False
