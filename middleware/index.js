module.exports = (req, res, next) => {
    return res.status(200).json({ conde: 1, message: "Bienvenido al Pokedex" });
}