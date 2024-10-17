const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.get('/test', async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
    
  } catch (error) {
    console.error('데이터 조회 실패:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
});

module.exports = router;
