'use strict';

var Scaffold = require('scaffold');

exports.one = new Scaffold({
  cwd: 'fixtures',
  destBase: 'site/one',
  files: [
    {src: '*.txt', dest: 'a'},
    {src: '*.txt', dest: 'b'},
    {src: '*.txt', dest: 'c'},
    {src: '*.md', dest: 'md', data: {name: 'Brooke'}},
  ]
});

exports.two = new Scaffold({
  foo: {
    options: {
      cwd: 'fixtures',
      destBase: 'site/two',
    },
    data: {name: 'Halle'},
    files: [
      {src: '*.txt', dest: 'a'},
      {src: '*.txt', dest: 'b'},
      {src: '*.txt', dest: 'c'},
      {src: '*.md', dest: 'md'},
    ]
  },
  bar: {
    cwd: 'fixtures',
    destBase: 'site/three',
    data: {name: 'Halle'},
    files: [
      {src: '*.txt', dest: 'a'},
      {src: '*.txt', dest: 'b'},
      {src: '*.txt', dest: 'c'},
      {src: '*.md', dest: 'md', data: {name: 'Brooke'}},
    ]
  }
});

