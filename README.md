# Task Tracker CLI

A command-line task tracker built with Node.js as a learning project.

Project specification: [Task Tracker on roadmap.sh](https://roadmap.sh/projects/task-tracker)

## Current Progress

The current version reads positional command-line arguments and routes commands using `if`, `else if`, and `else`. Commands currently print messages; task storage and management are planned.

## Planned Features

- Add, update, and delete tasks.
- Mark tasks as `in-progress` or `done`.
- List all tasks or filter by `todo`, `in-progress`, and `done`.
- Store tasks in a JSON file in the current directory.
- Create the storage file automatically when it does not exist.
- Handle missing inputs, invalid commands, and unknown task IDs.

## Technology

- JavaScript and Node.js
- Built-in `fs` module for planned file storage
- JSON for planned data persistence
- No external libraries or frameworks

## Getting Started

Install Node.js, then clone the repository:

```bash
git clone https://github.com/dubeyharshit0605/Task-Tracker.git
cd Task-Tracker
node index.js add "Practice DSA"
```

## Command Interface

These commands describe the intended interface. Full task operations are still under development.

```bash
# Add a task
node index.js add "Practice DSA"

# Update or delete a task using its ID
node index.js update 1 "Practice dynamic programming"
node index.js delete 1

# Change a task's status
node index.js mark-in-progress 1
node index.js mark-done 1

# List tasks
node index.js list
node index.js list todo
node index.js list in-progress
node index.js list done
```

`todo` means a task has not started; `in-progress` means it is being worked on. Both are unfinished statuses.

## Planned Task Structure

```json
{
  "id": 1,
  "description": "Practice DSA",
  "status": "todo",
  "createdAt": "2026-10-11T12:00:00.000Z",
  "updatedAt": "2026-10-11T12:00:00.000Z"
}
```

## Learning Goals

Practice command-line arguments, conditional logic, objects and arrays, file handling, JSON serialization, and input validation by implementing one feature at a time.
