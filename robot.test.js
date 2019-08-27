const {newRobot, station, isWorkday, prioritizeTasks} = require("./robot.js");

// remove .skip when you're ready to implement the test
test("test_that_foreign_robot_needing_repairs_sent_to_station_1", () => {
  // arrange
  let robot = newRobot(true, true, false);
  // act
  let result = station(robot);
  // assert
  expect(result).toEqual(1);
});

test("test_that_vintage_robot_needing_repairs_sent_to_station_2", () => {
  // arrange
  let robot = newRobot(true, false, true);
  // act
  let result = station(robot);
  // assert
  expect(result).toEqual(2);
});

test("test_that_standard_robot_needing_repairs_sent_to_station_3", () => {
  // arrange
  let robot = newRobot(true, false, false);
  // act
  let result = station(robot);
  // assert
  expect(result).toEqual(3);
});

test("test_that_robot_in_good_condition_sent_to_station_4", () => {
  // arrange
  let robot = newRobot(false, false, false);
  // act
  let result = station(robot);
  // assert
  expect(result).toEqual(4);
});

test("test_prioritize_tasks_with_empty_todo_list_returns_negative_one", () => {
  // arrange
  let robot = newRobot(false, false, false);
  // act
  let result = prioritizeTasks(robot);
  // assert
  expect(result).toEqual(-1);
});

test("test_prioritize_tasks_with_todos_returns_max_todo_value", () => {
  // arrange
  let robot = newRobot(false, false, false);
  robot.todos.push("needs repairs");
  // act
  let result = prioritizeTasks(robot);
  // assert
  expect(result).toEqual(Math.max(...robot.todos));
});

test("test_workday_on_day_off_returns_false", () => {
  // arrange
  let robot = newRobot();
  robot.dayOff = "Monday";
  // act
  let result = isWorkday(robot, "Monday");
  // assert
  expect(result).toEqual(false);
});

test("test_workday_not_day_off_returns_true", () => {
  // arrange
  let robot = newRobot();
  robot.dayOff = "Monday";
  // act
  let result = isWorkday(robot, "Tuesday");
  // assert
  expect(result).toEqual(true);
});
