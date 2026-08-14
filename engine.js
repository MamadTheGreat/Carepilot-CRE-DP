import { questionData as glycemicData } from './domains/glycemic.js';
import { questionData as nutritionData } from './domains/nutrition.js';
import { questionData as medicationData } from './domains/medication.js';
import { questionData as psychologicalData } from './domains/psychological.js';
import { questionData as caregiverData } from './domains/caregiver.js';
import { questionData as complicationData } from './domains/complication.js';
import { questionData as selfData } from './domains/self.js';
import { questionData as healthcareData } from './domains/healthcare.js';
import { questionData as dataData } from './domains/data.js';

const nodes = [
  { id: 'glycemic', label: 'Glycemic\nControl' },
  { id: 'nutrition', label: 'Nutrition\n& Intake' },
  { id: 'medication', label: 'Medication\nAccess & Use' },
  { id: 'psychological', label: 'Psychological\nStatus' },
  { id: 'caregiver', label: 'Caregiver /\nSocial Support' },
  { id: 'complication', label: 'Complication /\nRed Flags' },
  { id: 'self', label: 'Self-management\n& Adherence' },
  { id: 'healthcare', label: 'Healthcare\nInteraction' },
  { id: 'data', label: 'Data Quality\n& Reliability' }
];
const questionData = {
  glycemic: glycemicData, nutrition: nutritionData, medication: medicationData,
  psychological: psychologicalData, caregiver: caregiverData, complication: complicationData,
  self: selfData, healthcare: healthcareData, data: dataData
};
const subitems = Object.fromEntries(Object.entries(questionData).map(([id, items]) => [id, items.map((item) => item.title)]));
let activeNode = null;
let activeSubitem = null;

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[char]));

function positionNodes() {
  const diagram = document.getElementById('diagram');
  const svg = document.getElementById('connector-svg');
  const svgNS = 'http://www.w3.org/2000/svg';
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.innerHTML = '';
  const cx = 50, cy = 50, radius = 38, centerRadius = 11.5;
  nodes.forEach((node, index) => {
    const angle = (2 * Math.PI * index / nodes.length) - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', cx + centerRadius * Math.cos(angle));
    line.setAttribute('y1', cy + centerRadius * Math.sin(angle));
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(line);
    let element = document.getElementById(`node-${node.id}`);
    if (!element) {
      element = document.createElement('button');
      element.id = `node-${node.id}`;
      element.className = 'node';
      element.addEventListener('click', () => openNode(node.id));
      diagram.appendChild(element);
    }
    element.style.left = `${x}%`;
    element.style.top = `${y}%`;
    element.textContent = node.label;
  });
}

function scrollToPanels() {
  const group = document.querySelector('.sidebar-group');
  if (group) requestAnimationFrame(() => group.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

function renderPatientPage(page, index) {
  const options = page.options || [];
  const input = page.input
    ? '<input class="patient-input" type="number" inputmode="decimal" aria-label="Numeric response" placeholder="mg/dL">'
    : '';
  const optionsHtml = options.length
    ? `<div class="patient-options-label">${escapeHtml(page.fallbackLabel || '')}</div>
       <div class="patient-options">${options.map((item) => `<div class="patient-option">${escapeHtml(item)}</div>`).join('')}</div>`
    : '';
  const condition = page.condition ? `<div class="patient-condition">${escapeHtml(page.condition)}</div>` : '';
  const explanation = page.explanation ? `<div class="patient-explanation">${escapeHtml(page.explanation)}</div>` : '';
  return `<div class="phone-preview phone-page">
    <div class="phone-status"><span>CarePilot</span><span>●●●</span></div>
    <div class="phone-card">
      <div class="phone-kicker">Daily check-in · ${index + 1}</div>
      ${condition}
      <div class="phone-question">${escapeHtml(page.question || 'این مورد توسط موتور قواعد بالینی محاسبه می‌شود.')}</div>
      ${input}${optionsHtml}${explanation}
    </div>
  </div>`;
}

function openNode(id) {
  if (activeNode === id) { closeSidebar1(); return; }
  activeNode = id;
  activeSubitem = null;
  document.querySelectorAll('.node').forEach((el) => el.classList.remove('active'));
  document.getElementById(`node-${id}`)?.classList.add('active');
  const node = nodes.find((item) => item.id === id);
  document.getElementById('sidebar1-title').textContent = node.label.replace('\n', ' ');
  const list = document.getElementById('sidebar1-list');
  list.innerHTML = '';
  (subitems[id] || []).forEach((subitem) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = subitem;
    button.addEventListener('click', () => openSubitem(id, subitem, button));
    li.appendChild(button);
    list.appendChild(li);
  });
  closeSidebar2(false);
  closeSidebar3(false);
  document.getElementById('sidebar1').classList.add('open');
  document.getElementById('diagram-wrap').classList.add('dimmed');
  document.querySelector('.layout').classList.add('panels-open');
  scrollToPanels();
}

function openSubitem(nodeId, subName, button) {
  if (activeSubitem === subName) { closeSidebar2(); return; }
  activeSubitem = subName;
  document.querySelectorAll('#sidebar1-list button').forEach((el) => el.classList.remove('active'));
  button?.classList.add('active');
  const model = (questionData[nodeId] || []).find((item) => item.title === subName) || { pages: [], metadata: {}, extra: [] };
  document.getElementById('sidebar2-title').textContent = 'Patient view';
  const pages = model.pages?.length
    ? model.pages.map(renderPatientPage).join('')
    : '<p class="patient-muted">این مورد مستقیماً از بیمار پرسیده نمی‌شود و توسط موتور قواعد بالینی محاسبه می‌شود.</p>';
  document.getElementById('sidebar2-content').innerHTML = `<div class="patient-pages">${pages}</div>`;
  document.getElementById('sidebar2').classList.add('open');
  document.getElementById('sidebar2-content').scrollTop = 0;

  document.getElementById('sidebar3-title').textContent = 'Question information';
  const metadata = model.metadata || {};
  const rows = ['Data Type', 'Clinical Horizon', 'System Action', 'Owner']
    .map((key) => `<tr><th>${key}</th><td>${escapeHtml(metadata[key] || '').replace(/\n/g, '<br>')}</td></tr>`).join('');
  const extra = (model.extra || []).filter(Boolean).map((item) => `<p>${escapeHtml(item)}</p>`).join('');
  document.getElementById('sidebar3-content').innerHTML = `<table class="metadata-table"><tbody>${rows}</tbody></table>${extra ? `<div class="metadata-extra"><div class="metadata-extra-title">Additional explanation</div>${extra}</div>` : ''}`;
  document.getElementById('sidebar3').classList.add('open');
  document.getElementById('sidebar3-content').scrollTop = 0;
}

function closeSidebar2(clearActive = true) {
  document.getElementById('sidebar2').classList.remove('open');
  document.getElementById('sidebar3').classList.remove('open');
  if (clearActive) {
    activeSubitem = null;
    document.querySelectorAll('#sidebar1-list button').forEach((el) => el.classList.remove('active'));
  }
}
function closeSidebar3() { document.getElementById('sidebar3').classList.remove('open'); }
function closeSidebar1() {
  closeSidebar2(true);
  document.getElementById('sidebar1').classList.remove('open');
  document.getElementById('diagram-wrap').classList.remove('dimmed');
  document.querySelector('.layout').classList.remove('panels-open');
  document.querySelectorAll('.node').forEach((el) => el.classList.remove('active'));
  activeNode = null;
}
window.closeSidebar1 = closeSidebar1;
window.closeSidebar2 = closeSidebar2;
window.closeSidebar3 = closeSidebar3;
window.addEventListener('DOMContentLoaded', positionNodes);
