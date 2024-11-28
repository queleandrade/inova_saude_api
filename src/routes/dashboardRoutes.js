const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/stats', async (req, res) => {
    try {
        const totalUsers = await User.countDocuments(); 
        res.status(200).json({
            totalUsers,
            // adicionar outras métricas aqui
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estatísticas do sistema' });
    }
});


// Rota para exportar dados do dashboard como CSV
router.get('/export', (req, res) => {
    try {
        const csvHeaders = 'Métrica,Valor\n';
        const csvRows = dashboardData.map(item => `${item.metric},${item.value}`).join('\n');
        const csvContent = csvHeaders + csvRows;

        const filePath = 'dashboard_data.csv';
        fs.writeFileSync(filePath, csvContent);

        res.download(filePath, 'dashboard_data.csv', (err) => {
            if (err) {
                console.error('Erro ao baixar o arquivo:', err);
                res.status(500).json({ message: 'Erro ao baixar o arquivo' });
            }
            fs.unlinkSync(filePath); // Apaga o arquivo após o download
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao exportar dados do dashboard' });
    }
});
module.exports = router;
