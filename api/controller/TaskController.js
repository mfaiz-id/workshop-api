const knex = require('../../db/knex');

exports.get_task = async function(req, res, next) {
    try{        
        let query = `select * from tasks t `
        if(req.query.keyword != ''){
            query += `where t.task_name LIKE '%${req.query.keyword}%'`
        }
        const cek_user = await knex.raw(query);
        const jumlah_data = parseInt(cek_user[0].length)
        if(jumlah_data==0){
            res.status(200).json({
                success:false,
                message:"Data tidak ditemukan",
                data: cek_user[0]
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Data ditemukan",
                data:cek_user[0],
            });
        }
    } catch (err){
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' });
    }
};
exports.get_detail = async function(req, res, next) {
    try{        
        let query = `select * from tasks t where t.id = ${req.query.id} `
        const cek_task = await knex.raw(query);
        const jumlah_data = parseInt(cek_task[0].length)
        if(jumlah_data==0){
            res.status(200).json({
                success:false,
                message:"Data tidak ditemukan",
                data: cek_task[0]
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Data ditemukan",
                data:cek_task[0],
            });
        }
    } catch (err){
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' });
    }
};
exports.submit = async function(req, res, next) {
    try{      
        const id = req.body.id; 
        const hasil = req.body.hasil; 

        let query = `
        update tasks set hasil = '${hasil}',  is_done = true, time_finished = now()
        where id = ${id}`
        await knex.raw(query)
        .then((x) => {
            res.json({
                success:true,
                message:"Berhasil memperbarui data"
            })
        })
        .catch((err) => {
            res.status(500).json({
                success:false,
                message:"Terjadi kesalahan"
            })
        })
    } catch (err){
        console.log(err)
        return res.status(500).json({ msg: 'Internal server error' });
    }
};