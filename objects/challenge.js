const cohort = {
  name: "May2022",
  id: 1234,
  studentNames: ["abdi", "john", "bob"],
};

const cohortFunction = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in the cohort`;
};

console.log(cohortFunction(cohort));
