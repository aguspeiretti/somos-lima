
import React, { useState } from 'react';
import { PROJECTS } from '../constants.js';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-24 bg-pearl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif text-charcoal">Portafolio</h2>
            <div className="w-24 h-1 bg-lima" />
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-charcoal text-pearl border-charcoal' 
                    : 'bg-transparent text-charcoal border-sand hover:border-lima'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-video overflow-hidden mb-6 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 flex flex-col opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white text-[10px] uppercase tracking-[0.3em] font-sans">{project.location}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                   <span className="text-lima font-sans font-bold text-xs uppercase tracking-widest">{project.category}</span>
                   <span className="w-8 h-[1px] bg-sand" />
                   <span className="text-charcoal/40 font-sans text-xs">{project.year}</span>
                </div>
                <h3 className="text-3xl font-serif group-hover:text-lima transition-colors text-charcoal">{project.title}</h3>
                <p className="text-charcoal/60 font-sans text-sm max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
