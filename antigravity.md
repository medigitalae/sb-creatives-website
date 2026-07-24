# Antigravity Reference

## Project Structure
- **Frontend**: React application built with `craco`, Tailwind CSS, and Radix UI. Located in `/frontend`.
- **Backend**: FastAPI application connecting to MongoDB via Motor. Located in `/backend`.
- **Testing Protocol**: There is a strict testing protocol defined in `test_result.md`. We must ALWAYS update this file before and after testing tasks, especially when calling the testing sub-agent.

## Launching the Project
To launch the project on localhost, you need two terminal sessions:

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm run start
```
*Note: Due to some peer dependency conflicts, `--legacy-peer-deps` is required for npm install.*

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
uvicorn server:app --reload
```

## Important Files
- `design_guidelines.json`: Contains color palettes, typography, and styling rules.
- `test_result.md`: Tracks the state for automated testing agents.

## Notes for Antigravity (AI)
- When writing components, leverage the Radix UI primitives already in `package.json`.
- When writing backend APIs, follow the FastAPI conventions in `server.py`.
- ALWAYS refer to `test_result.md` when running or modifying tests.
