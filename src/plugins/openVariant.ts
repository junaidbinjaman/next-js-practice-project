/* eslint-disable */
const plugin = require('tailwindcss/plugin');

const openVariant = plugin(function({ addVariant }: {addVariant: (name: string, definition: string) => void}) {
    addVariant('group-open', ":merge(.group).open &");
});

module.exports = openVariant;
