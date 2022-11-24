const Venta = require("../models/venta")

// Recuperar todos los vendedores
exports.getVentas = (req, res) =>
    Venta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.getVentaById = (req, res) =>
    Venta.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
exports.createVenta = (req, res) =>
    new Venta({ idvend: req.body.idvend, fecha: req.body.fecha, valorVenta: req.body.valorVenta, zona: req.body.zona })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

exports.updateVenta = (req, res) =>
    Venta.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { idvend: req.body.idvend, fecha: req.body.fecha, valorVenta: req.body.valorVenta, zona: req.body.zona } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );

exports.deleteVenta = (req, res) =>
    Venta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });




