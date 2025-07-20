# PCB Photo Simulator MVP

This app allows users to upload an image of a circuit board and:
1. Extract component labels via OCR
2. Visualize the board and labeled components
3. Display a basic board outline

## Structure
- `frontend/`: React app
- `backend/`: FastAPI server with Tesseract OCR and OpenCV

## Deployment
Ready for Render or local Docker-based deployment.

🧱 1. BACKEND (FastAPI + Tesseract + OpenCV)
📦 Requirements:
Render Web Service

Docker-based deployment

✅ Steps:
Create a New Web Service

Go to: https://dashboard.render.com

Click "New +" → "Web Service"

Connect your GitHub repo

Pick the repo that contains the backend/ folder

Configure Build Settings:

Environment: Docker

Root Directory: backend

Name: pcb-backend

Region: Closest to you

Set Environment Variables (Optional):

Not required for this version

Click Create Web Service

Wait 2–4 minutes for Render to build your Docker container.

✅ When it finishes, your API will be available at:

arduino
Copy
Edit
https://<your-backend-service-name>.onrender.com/upload
🌐 2. FRONTEND (React App)
📦 Requirements:
Render Static Site

✅ Steps:
Create a New Static Site

Go to: https://dashboard.render.com

Click "New +" → "Static Site"

Connect your GitHub repo

Use the same repo, and select the frontend/ directory

Configure Build Settings:

Root Directory: frontend

Build Command: npm run build

Publish Directory: build

Set Environment Variable (Optional):

REACT_APP_API_BASE_URL=https://<your-backend-service-name>.onrender.com

(if you later refactor your frontend to use env vars)

Click Create Static Site
