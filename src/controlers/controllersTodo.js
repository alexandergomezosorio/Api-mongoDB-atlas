const { Vendedor, Venta } = require("../models/modelsTodo")

//Vendedor
exports.getVendedor = (req, res) =>
    Vendedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.getVendedorById = (req, res) =>
    Vendedor.findOne({ idvendedor: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.findOneAndUpdate = (req, res) => {
    Vendedor.findOneAndUpdate(
        { "idvendedor": req.params.id },
        { $inc: { "totalComision": 2333} }
    )
}
exports.updateVendedor = (req, res) =>
    Vendedor.findOneAndUpdate(
        { idvendedor: req.params.id },
        { $set: { idvendedor: req.body.idvendedor, nombre: req.body.nombre, correo: req.body.correo, totalComision: req.body.totalComision } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );

exports.createVendedor = (req, res) =>
    new Vendedor({ idvendedor: req.body.idvendedor, nombre: req.body.nombre, correo: req.body.correo, totalComision: req.body.totalComision })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });


exports.deleteVendedor = (req, res) =>
    Vendedor.findOneAndRemove({ idvendedor: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

    //Venta
exports.getVentas = (req, res) =>
    Venta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.getVentaById = (req, res) =>
    Venta.findOne({ idvendedor: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
exports.createVenta = (req, res) =>
    new Venta({ idvendedor: req.body.idvendedor, fecha: req.body.fecha, valorVenta: req.body.valorVenta, zona: req.body.zona })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

exports.updateVenta = (req, res) =>
    Venta.findOneAndUpdate(
        { idvendedor: req.params.id },
        { $set: { idvendedor: req.body.idvendedor, fecha: req.body.fecha, valorVenta: req.body.valorVenta, zona: req.body.zona } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );

exports.deleteVenta = (req, res) =>
    Venta.findOneAndRemove({ idvendedor: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
