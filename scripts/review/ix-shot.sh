#!/bin/sh
# ix-shot.sh <out.png> <query> [w h]: one frame of the opening, at a size
cd /Users/brennanmceachran/Developer/decision-evals
export AGENT_BROWSER_SESSION=decision-v5
agent-browser set viewport ${3:-1440} ${4:-900} >/dev/null
agent-browser open "http://localhost:8780/v6/index.html?$2&r=$RANDOM" >/dev/null
sleep ${SLEEP:-1.6}
agent-browser screenshot "$1" >/dev/null
