export default function checkCookie(req, res, next) {
  res.cookies = req.cookies
  next()
}
