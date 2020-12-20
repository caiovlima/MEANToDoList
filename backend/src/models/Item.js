const mongoose = require('mongoose');
const express = require('express');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Item', ItemSchema);