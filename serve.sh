#!/usr/bin/env bash
# Usage: ./serve.sh [PORT]
# Default port: 8001
# Stop:  kill $(cat .server.pid)
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="$PROJECT_DIR/.venv"
GUNICORN="$VENV/bin/gunicorn"
PORT=${1:-8001}
HOST=${HOST:-0.0.0.0}
WORKERS=3
PIDFILE="$PROJECT_DIR/.server.pid"
LOG="$PROJECT_DIR/.server.log"

# ── 1. One-time setup: only runs if gunicorn is not already installed ─────
if [ ! -x "$GUNICORN" ]; then
  echo "First-run setup: creating venv and installing gunicorn (once only)..."
  python3 -m venv "$VENV"
  "$VENV/bin/pip" install --quiet --disable-pip-version-check gunicorn
  echo "Setup done."
fi

# ── 2. Stop any existing instance managed by this script ─────────────────
if [ -f "$PIDFILE" ]; then
  OLD=$(cat "$PIDFILE" 2>/dev/null || true)
  if [ -n "$OLD" ] && kill -0 "$OLD" 2>/dev/null; then
    echo "Stopping existing server (PID $OLD)..."
    kill "$OLD" || true
    sleep 0.8
  fi
  rm -f "$PIDFILE"
fi

if lsof -i tcp:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Error: port $PORT is already in use by another process." >&2
  exit 1
fi

# ── 3. Launch: daemon mode survives terminal close; master auto-respawns ──
#    crashed workers; --max-requests recycles workers to prevent memory leaks.
"$GUNICORN" \
  --chdir "$PROJECT_DIR" \
  --bind "$HOST:$PORT" \
  --workers "$WORKERS" \
  --pid "$PIDFILE" \
  --daemon \
  --error-logfile "$LOG" \
  --access-logfile "-" \
  --max-requests 2000 \
  --max-requests-jitter 200 \
  serve:app

sleep 0.5
if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "Server running  →  http://localhost:$PORT"
  echo "Workers : $WORKERS (gunicorn auto-respawns crashed workers)"
  echo "Logs    : $LOG"
  echo "Stop    : kill \$(cat '$PIDFILE')"
else
  echo "ERROR: server failed to start — check $LOG" >&2
  exit 1
fi
