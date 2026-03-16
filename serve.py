"""serve.py — stdlib-only WSGI static file server for gunicorn.
No dependencies beyond gunicorn itself.
"""
import mimetypes
from pathlib import Path

ROOT = Path(__file__).parent.resolve()


def application(environ, start_response):
    rel = environ.get("PATH_INFO", "/").lstrip("/")
    target = (ROOT / rel).resolve() if rel else ROOT / "index.html"

    # Block path traversal outside the project root
    try:
        target.relative_to(ROOT)
    except ValueError:
        start_response("403 Forbidden", [("Content-Type", "text/plain")])
        return [b"Forbidden"]

    # Serve index.html for directory requests
    if target.is_dir():
        target = target / "index.html"

    if not target.is_file():
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Not found"]

    data = target.read_bytes()
    mime, _ = mimetypes.guess_type(str(target))
    start_response("200 OK", [
        ("Content-Type", mime or "application/octet-stream"),
        ("Content-Length", str(len(data))),
        ("Cache-Control", "no-cache"),
    ])
    return [data]


app = application
