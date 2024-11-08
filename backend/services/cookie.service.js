export const setAuthCookie = (res, token) => {
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 30 * 60 * 1000,
      sameSite: 'Strict',
    });
};
  