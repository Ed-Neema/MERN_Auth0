import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  console.log("verify called");
  const token = req.cookies.access_token; //the name we gave to the cookie = access_token
  console.log("token is", token);
  if (!token) return next(errorHandler(401, "You are not authenticated!"));
  console.log("111");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log("222");
    if (err) return next(errorHandler(403, "Token is not valid!"));
    console.log("333");

    req.user = user;
    console.log(user);
    console.log("444");
    next();
  });
};
