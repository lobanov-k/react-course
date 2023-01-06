const repos = [
  {
    updated_at: "2022-08-01T18:19:13Z",
    name: "repo 1",
  },
  {
    updated_at: "2022-09-23T16:51:54Z",
    name: "repo 2",
  },
  {
    updated_at: "2022-07-15T18:19:13Z",
    name: "repo 3",
  },
];

const sorted = repos.sort((rep1, rep2) => {
  return -(new Date(rep1.updated_at) - new Date(rep2.updated_at));
});

console.log(sorted);
