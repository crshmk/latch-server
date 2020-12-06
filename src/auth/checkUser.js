export default function checkCookie(req, res, next) {
  res.user = req.body.user
  next()
}
