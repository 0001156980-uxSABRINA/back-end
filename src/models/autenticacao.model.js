const db = require('../config/db');

exports.buscarPorEmail = async (email)=>{
    const [rows] = await db.promise().query(
        'SELECT * FROM usuario WHERE email = ?', [email]
    );
    return rows[0];
}