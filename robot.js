function newRobot(needs_repairs, foreign_model, vintage_model) {
  return {
    needs_repairs: needs_repairs,
    foreign_model: foreign_model,
    vintage_model: vintage_model,
    todos: []
  };
}

function station(robot) {
  if (robot.needs_repairs && robot.foreign_model) {
    return 1;
  } else if (robot.needs_repairs && robot.vintage_model) {
    return 2;
  } else if (robot.needs_repairs) {
    return 3;
  } else {
    return 4;
  }
}

function prioritizeTasks(robot) {
  if (robot.todos.length > 0) {
    return Math.max(...robot.todos);
  } else {
    return -1;
  }
}

function isWorkday(robot, today) {
  return today !== robot.dayOff;
}

module.exports = {newRobot, station, isWorkday, prioritizeTasks};
