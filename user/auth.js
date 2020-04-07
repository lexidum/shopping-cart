function auth(db, user, pass) {
  const users = db.users;
  const result = Object.values(users).find((x) => x.username === user);
  if (!result) {
    return {
      error: true,
      message: "User does not exist!",
    };
  } else if (result.password !== pass) {
    return {
      error: true,
      message: "Password is invalid!",
    };
  } else {
    const session = {
      data: result,
      startedAt: Date.now(),
      id: Math.random() * 10,
    };
    db.sessions[session.id] = session;
    return session;
  }
}
module.exports = auth;
