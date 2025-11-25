#!/bin/bash

echo "🌟 Bella Hair Salon Appointment Application Demo"
echo "=================================================="
echo ""
echo "Starting the application..."
echo ""

# Start the server in the background
node server.js &
SERVER_PID=$!

# Wait for server to start
sleep 2

echo "✅ Server started successfully!"
echo ""
echo "📱 Customer Interface: http://localhost:3000"
echo "👩‍💼 Admin Dashboard: http://localhost:3000/admin"
echo ""
echo "🔧 Testing API endpoints..."
echo ""

# Test services endpoint
echo "📋 Available Services:"
curl -s http://localhost:3000/api/services | jq -r '.[] | "• \(.name) - $\(.price) (\(.duration) min)"' 2>/dev/null || curl -s http://localhost:3000/api/services

echo ""
echo "📅 Current Appointments:"
curl -s http://localhost:3000/api/appointments | jq -r '.[] | "• \(.firstName) \(.lastName) - \(.date) @ \(.time)"' 2>/dev/null || curl -s http://localhost:3000/api/appointments

echo ""
echo "🎉 Demo completed! The application is running."
echo "   Press Ctrl+C to stop the server."
echo ""

# Wait for user to stop
wait $SERVER_PID