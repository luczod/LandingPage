async function listHome() {
  const req = await fetch(
    `http://localhost:1337/api/pages/?filters[slug]=first-page&populate=deep`
  );
  const res = await req.json();
  return res;
}

export const wsapi = {
  // user
  listHome,
};
