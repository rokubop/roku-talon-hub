import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/roku-talon-hub/',
    component: ComponentCreator('/roku-talon-hub/', 'f20'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
