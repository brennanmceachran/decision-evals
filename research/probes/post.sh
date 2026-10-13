#!/bin/zsh
# usage: post.sh <path> <body.json>
set -a; source /Users/brennanmceachran/Developer/decision-evals/.env; set +a
curl -sS -w '\n--- http=%{http_code} time=%{time_total}s\n' -X POST "https://ai-gateway.vercel.sh$1" \
  -H "Authorization: Bearer $AI_GATEWAY_API_KEY" -H "Content-Type: application/json" --data @"$2" -D /dev/null
