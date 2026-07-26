#!/bin/bash
cd /Users/parthas/Projects/grc-launchpad-site
pkill -f "next dev.*3001" 2>/dev/null
sleep 1
npx next dev --port 3001 >> /Users/parthas/Projects/grc-launchpad-site/.data/server.log 2>&1
