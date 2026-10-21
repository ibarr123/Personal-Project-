const projects = {
  "research": {
    "label": "CAPSTONE / AI SYSTEMS DEVELOPER & PRODUCT OWNER \u00b7 JAN 2026\u2013PRESENT",
    "title": "Multi-Agent AI IT Support System",
    "sections": [
      [
        "The challenge",
        "Automate common IT support workflows, including ticket triage, password resets, and issue classification."
      ],
      [
        "My approach",
        "Designed specialized agents for intake, knowledge retrieval, workflow execution, and escalation to simulate enterprise IT support operations."
      ],
      [
        "Technical foundations",
        "Built a retrieval-augmented generation pipeline with embeddings and vector databases. Integrated structured data and external tools for information retrieval and workflow automation."
      ],
      [
        "Business perspective",
        "Defined use cases, success metrics, and the interaction experience using product ownership principles. This capstone is listed as ongoing on my r\u00e9sum\u00e9."
      ]
    ]
  },
  "portfolio": {
    "label": "CONSULTING / PROJECT MANAGER \u00b7 JAN 2026\u2013PRESENT",
    "title": "Peninsula Healthcare IT Consulting",
    "sections": [
      [
        "The goal",
        "Improve accessibility, user experience, and donor engagement for a nonprofit healthcare organization."
      ],
      [
        "My contribution",
        "Led the website redesign project, gathered stakeholder feedback, and translated organizational needs into priorities, content updates, and interface improvements."
      ],
      [
        "Reported outcome",
        "Implemented email capture workflows and updated site content, contributing to more than 100% growth in website traffic, as reported on my r\u00e9sum\u00e9."
      ]
    ]
  },
  "team": {
    "label": "AI AUTOMATION / PRODUCT OWNER \u00b7 AUG\u2013DEC 2025",
    "title": "AI Pricing Assistant for Tattoo Studio",
    "sections": [
      [
        "The business need",
        "Help a tattoo studio provide price estimates and answer frequent customer questions more efficiently."
      ],
      [
        "My contribution",
        "Developed an AI-powered pricing assistant using the Gemini API. Translated business needs into requirements and coordinated workflow automation for customer interactions."
      ],
      [
        "Reported outcome",
        "The prototype reduced non-qualified email inquiries by 15% within one week of deployment, as reported on my r\u00e9sum\u00e9."
      ]
    ]
  },
  "analytics": {
    "label": "COURSEWORK / DATA ANALYST \u00b7 JAN\u2013FEB 2026",
    "title": "Agentic AI for Business Data Analytics",
    "sections": [
      [
        "The analysis",
        "Analyzed structured datasets with Python, Pandas, and SQL to identify business trends and performance insights."
      ],
      [
        "Making findings useful",
        "Developed reports and visual summaries to explain key findings and support data-driven decisions."
      ],
      [
        "AI-assisted workflow",
        "Used AI-assisted processes for data cleaning, analysis, and documentation. This work connects Python coursework with practical business analytics."
      ]
    ]
  }
};

const filters = document.querySelectorAll('.filter');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('.project').forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
  });
}));

const dialog = document.querySelector('#project-dialog');
dialog.setAttribute('aria-labelledby', 'dialog-title');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  project.sections.forEach(([heading, text]) => {
    const h3 = document.createElement('h3');
    const paragraph = document.createElement('p');
    h3.textContent = heading;
    paragraph.textContent = text;
    content.append(h3, paragraph);
  });
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
