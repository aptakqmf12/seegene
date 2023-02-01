export const getData = async () => {
  const res = await fetch(`/code-test/202212`, {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  return res.json();
};
