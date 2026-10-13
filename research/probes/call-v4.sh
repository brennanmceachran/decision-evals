#!/bin/zsh
# usage: call.sh <model-id> <body.json>   -- prints HTTP status, timing, response body
set -a; source /Users/brennanmceachran/Developer/decision-evals/.env; set +a
curl -sS -w '\n--- http=%{http_code} time=%{time_total}s\n' \
  -X POST https://ai-gateway.vercel.sh/v4/ai/decision-model \
  -H "Authorization: Bearer $AI_GATEWAY_API_KEY" \
  -H "Content-Type: application/json" \
  -H "ai-decision-model-specification-version: 4" \
  -H "ai-model-id: $1" -H "ai-gateway-protocol-version: 0.0.1" -H "ai-gateway-auth-method: api-key" \
  --data @"$2" -D /dev/null
