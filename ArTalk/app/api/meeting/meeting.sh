#!/bin/bash

API_KEY="artalk_default_secret"
ARTALK_URL="http://localhost:3000/api/v1/meeting"
# MIROTALK_URL="https://p2p.mirotalk.com/api/v1/meeting"
# MIROTALK_URL="https://mirotalk.up.railway.app/api/v1/meeting"
# MIROTALK_URL="https://mirotalk.herokuapp.com/api/v1/meeting"
# MIROTALK_URL="https://thankful-remotely-feline.ngrok-free.app/api/v1/meeting"

curl $ARTALK_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST