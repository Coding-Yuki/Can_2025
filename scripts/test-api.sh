#!/bin/bash

# CAN 2025 API Testing Script
# This script tests the chat API endpoints

echo "🧪 Testing CAN Morocco 2025 API Endpoints"
echo "=========================================="
echo ""

# Set your deployment URL here
DEPLOYMENT_URL="${1:-http://localhost:3000}"

echo "📍 Using URL: $DEPLOYMENT_URL"
echo ""

# Test 1: Chat POST endpoint
echo "Test 1: Chat POST - Greeting"
echo "----------------------------"
curl -X POST "$DEPLOYMENT_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour"}],"userId":"test-user-123"}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s | jq '.'

echo ""
echo ""

# Test 2: Chat POST - Teams question
echo "Test 2: Chat POST - Teams Question"
echo "-----------------------------------"
curl -X POST "$DEPLOYMENT_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Quelles sont les equipes?"}],"userId":"test-user-123"}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s | jq '.'

echo ""
echo ""

# Test 3: Chat POST - Tickets question
echo "Test 3: Chat POST - Tickets Question"
echo "------------------------------------"
curl -X POST "$DEPLOYMENT_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Combien coutent les billets?"}],"userId":"test-user-123"}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s | jq '.'

echo ""
echo ""

# Test 4: Chat GET - History
echo "Test 4: Chat GET - History"
echo "--------------------------"
curl -X GET "$DEPLOYMENT_URL/api/chat?userId=test-user-123" \
  -w "\nHTTP Status: %{http_code}\n" \
  -s | jq '.'

echo ""
echo ""

# Test 5: Chat POST - Invalid request
echo "Test 5: Chat POST - Invalid Request (should return 400)"
echo "-------------------------------------------------------"
curl -X POST "$DEPLOYMENT_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"invalid":"data"}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s | jq '.'

echo ""
echo "✅ Tests complete!"
echo ""
echo "To run these tests on your deployment:"
echo "  ./scripts/test-api.sh https://your-site.vercel.app"
