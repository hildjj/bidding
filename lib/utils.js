const entMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

export function escapeHTML(text) {
  return text.replace(/[&<>]/g, m => entMap[m]);
}
