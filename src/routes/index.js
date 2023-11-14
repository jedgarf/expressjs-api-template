import express from 'express';
const indexRouter = express.Router();

// --------------------------------------------------------------------------------------------
// Main Routes
indexRouter.get('/', (req, res) => {
    res.status(500).json('Welcome to API.');
});

indexRouter.get('/v1', (req, res) => {
    res.status(500).json('API V1');
});
// ----------------------------------------------------------------------------------------------

export default indexRouter;