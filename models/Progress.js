const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  roadmapId: {
    type: String,
    required: true
  },
  completedTopics: [{
    type: String
  }],
  notes: {
    type: Map,
    of: String,
    default: {}
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Compound index for efficient queries
progressSchema.index({ userId: 1, roadmapId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
