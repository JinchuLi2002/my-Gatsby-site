import React from 'react';
import BaseballCard from './baseball-card'

export default {
    component: BaseballCard,
    title: 'BaseballCard',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

export const Basic = () => <BaseballCard placeholderText='just some placeholder text for now' />;

