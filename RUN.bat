@echo off
setlocal
cd /d "%~dp0"
title SITEFORGE Campus Portal - Sprint 1 Demo
echo.
echo  ================================================
echo   SITEFORGE CAMPUS PORTAL - SPRINT 1 DEMO
echo  ================================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install the current Node.js LTS version from https://nodejs.org/
  echo Then run RUN.bat again.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm was not found. Reinstall Node.js LTS and try again.
  pause
  exit /b 1
)
REM Ensure dependencies (including devDependencies such as concurrently) exist.
if not exist node_modules\.bin\concurrently.cmd (
  echo Installing or repairing project dependencies...
  call npm install --include=dev
  if errorlevel 1 (
    echo.
    echo Dependency installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)
if not exist node_modules\.bin\concurrently.cmd (
  echo.
  echo ERROR: concurrently is still missing after npm install.
  echo Run this command in this folder: npm install --include=dev
  pause
  exit /b 1
)
echo.
echo Starting frontend and demo API...
echo Website: http://127.0.0.1:5173
echo API health: http://127.0.0.1:3001/api/health
echo Press Ctrl+C in this window to stop both services.
echo.
call npm run dev
pause
