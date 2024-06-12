export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token;

  const user = token && verifyToken(token);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function verifyToken(token) {
  return token === "valid-token";
}
