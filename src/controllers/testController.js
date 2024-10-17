const Test = require('../models/Test');

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (error) {
    console.error('테스트 데이터 조회 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ message: '해당 ID의 테스트 데이터를 찾을 수 없습니다.' });
    }
  } catch (error) {
    console.error('테스트 데이터 조회 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};
