const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// MongoDB 연결 (환경 변수 사용)
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ MongoDB Connected!'))
        .catch(err => console.error('❌ MongoDB Connection Error:', err));
} else {
    console.warn('⚠️ MONGODB_URI is not defined. Data will not be persisted in MongoDB.');
}

// 데이터 스키마 정의
const sugarDataSchema = new mongoose.Schema({
    deviceId: String,
    name: String,
    date: String,
    time: String,
    type: String,
    level: Number,
    memo: String,
    createdAt: { type: Date, default: Date.now }
});

// JSON-Server의 id 형식을 맞추기 위한 가상 필드 설정
sugarDataSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
sugarDataSchema.set('toJSON', { virtuals: true });

const SugarData = mongoose.model('SugarData', sugarDataSchema);

// API 라우트

// 1. 모든 데이터 가져오기 (deviceId 필터 지원)
app.get('/sugarData', async (req, res) => {
    try {
        const { deviceId } = req.query;
        const query = deviceId ? { deviceId } : {};
        const data = await SugarData.find(query).sort({ date: -1, time: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. 새로운 기록 저장
app.post('/sugarData', async (req, res) => {
    try {
        const newData = new SugarData(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. 기록 삭제
app.delete('/sugarData/:id', async (req, res) => {
    try {
        await SugarData.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(404).json({ error: 'Data not found' });
    }
});

// 모든 요청을 index.html로 (SPA 지원)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
