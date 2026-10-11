const args = process.argv.slice(2);
const command = args[0];

if (command === "add") {
  console.log("Add a task");
} else if (command === "update") {
  console.log("Update a task");
} else if (command === "delete") {
  console.log("Delete a task");
} else if (command === "mark-in-progress") {
  console.log("Set status to in-progress");
} else if (command === "mark-done") {
  console.log("Set status to done");
} else if (command === "list") {
  const status = args[1];

  if (!status) {
    console.log("List all tasks");
  } else if (status === "done") {
    console.log("List completed tasks");
  } else if (status === "todo") {
    console.log("List tasks yet to start");
  } else if (status === "in-progress") {
    console.log("List tasks currently in progress");
  } else {
    console.log("Invalid status");
  }
} else {
  console.log("Unknown command");
}