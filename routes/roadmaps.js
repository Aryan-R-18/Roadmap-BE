const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roadmapsData = require('../data/roadmaps');

// Get all roadmaps (academic and non-academic)
router.get('/', auth, (req, res) => {
  try {
    res.json(roadmapsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific roadmap by ID
router.get('/:id', auth, (req, res) => {
  try {
    const { id } = req.params;
    const allRoadmaps = [...roadmapsData.academic, ...roadmapsData.nonAcademic];
    const roadmap = allRoadmaps.find(r => r.id === id);
    
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    
    res.json(roadmap);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
