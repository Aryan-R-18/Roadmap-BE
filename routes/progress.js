const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Progress = require('../models/Progress');

// Get user progress for a specific roadmap
router.get('/:roadmapId', auth, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    let progress = await Progress.findOne({ userId: req.userId, roadmapId });
    
    if (!progress) {
      progress = new Progress({
        userId: req.userId,
        roadmapId,
        completedTopics: [],
        notes: {}
      });
      await progress.save();
    }
    
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all progress for user
router.get('/', auth, async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.userId });
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update progress (toggle topic completion)
router.post('/:roadmapId/toggle', auth, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { topicId } = req.body;
    
    let progress = await Progress.findOne({ userId: req.userId, roadmapId });
    
    if (!progress) {
      progress = new Progress({
        userId: req.userId,
        roadmapId,
        completedTopics: [topicId],
        notes: {}
      });
    } else {
      const index = progress.completedTopics.indexOf(topicId);
      if (index > -1) {
        progress.completedTopics.splice(index, 1);
      } else {
        progress.completedTopics.push(topicId);
      }
    }
    
    progress.lastUpdated = Date.now();
    await progress.save();
    
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update note for a topic
router.post('/:roadmapId/note', auth, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { topicId, note } = req.body;
    
    let progress = await Progress.findOne({ userId: req.userId, roadmapId });
    
    if (!progress) {
      progress = new Progress({
        userId: req.userId,
        roadmapId,
        completedTopics: [],
        notes: { [topicId]: note }
      });
    } else {
      progress.notes.set(topicId, note);
    }
    
    progress.lastUpdated = Date.now();
    await progress.save();
    
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark all topics as completed
router.post('/:roadmapId/complete-all', auth, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { allTopicIds } = req.body;
    
    let progress = await Progress.findOne({ userId: req.userId, roadmapId });
    
    if (!progress) {
      progress = new Progress({
        userId: req.userId,
        roadmapId,
        completedTopics: allTopicIds,
        notes: {}
      });
    } else {
      progress.completedTopics = allTopicIds;
    }
    
    progress.lastUpdated = Date.now();
    await progress.save();
    
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset progress
router.delete('/:roadmapId', auth, async (req, res) => {
  try {
    const { roadmapId } = req.params;
    
    await Progress.findOneAndUpdate(
      { userId: req.userId, roadmapId },
      { completedTopics: [], notes: {}, lastUpdated: Date.now() },
      { upsert: true, new: true }
    );
    
    res.json({ message: 'Progress reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
