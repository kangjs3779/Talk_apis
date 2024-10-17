const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
require('dotenv').config();
const sequelize = require('./config/database');
const apiRoutes = require('./routes/api');
const { log } = require('console');
const Test = require('./models/Test');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors({
  origin: 'http://localhost:5173', // Vite의 기본 포트
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

// 데이터베이스 연결 후에 실행되어야 합니다.
sequelize.authenticate()
  .then(() => {
    console.log('데이터베이스 연결 성공');
    // 데이터 조회
    return Test.findAll();
  })
  .then(tests => {
    console.log('Test 테이블의 모든 데이터:');
    tests.forEach(test => {
      console.log(`ID: ${test.TestId}, Title: ${test.Title}, Content: ${test.Content}`);
    });
  })
  .catch(err => {
    console.error('데이터베이스 연결 실패 또는 데이터 조회 실패:', err);
  });

app.use('/api', apiRoutes);
