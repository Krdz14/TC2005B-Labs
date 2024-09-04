const db = require('../util/database');

module.exports = class Ordenes {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_sneakers_id) {
        this.username = mi_username;
        this.sneakers_id = mi_sneakers_id;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO ordenes(username, sneakers_id) VALUES(?, ?)', 
            [this.username, this.sneakers_id]);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(
            `SELECT nombre, descripcion, imagen, o.created_at
            FROM ordenes o, users u, sneakers s
            WHERE u.username=o.username AND s.id=o.sneakers_id`);
    }
    static fetchOne(id) {
        return db.execute('SELECT * FROM ordenes WHERE id = ?', [id]);
    }
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}